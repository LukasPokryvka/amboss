type WorkingDaysInput = {
  hourlyRate: number // e.g. 25
  hoursPerDay: number // e.g. 8
  forDate?: Date // any date within the target month, defaults to now
  timeZone?: string // IANA TZ, defaults to system TZ
  weekendDays?: ReadonlySet<number> | number[] // 0=Sun ... 6=Sat; default: Sat+Sun
  holidaysISO?: ReadonlySet<string> | string[] // ISO yyyy-mm-dd in given TZ to exclude
  untilToday?: boolean // if true, only counts up to "today" in the given TZ
}

type WorkingDaysResult = {
  year: number
  month: number // 1-12
  workingDays: number
  workingHours: number
  total: number // hourlyRate * hoursPerDay * workingDays
}

export const calcMonthlySalary = (
  input: WorkingDaysInput
): WorkingDaysResult => {
  const {
    hourlyRate,
    hoursPerDay,
    forDate = new Date(),
    timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone,
    weekendDays = new Set([0, 6]),
    holidaysISO = new Set<string>(),
    untilToday = false
  } = input

  const weekend =
    weekendDays instanceof Set ? weekendDays : new Set(weekendDays)
  const holidays: ReadonlySet<string> = Array.isArray(holidaysISO)
    ? new Set(holidaysISO)
    : holidaysISO

  // Resolve target year/month in the provided time zone
  const ymParts = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    year: 'numeric',
    month: '2-digit'
  }).formatToParts(forDate)
  const year = Number(ymParts.find(p => p.type === 'year')!.value)
  const month = Number(ymParts.find(p => p.type === 'month')!.value) // 1-12
  const monthIdx = month - 1 // 0-11

  // Days in month is TZ-independent once you know year/month
  const daysInMonth = new Date(year, monthIdx + 1, 0).getDate()

  const weekdayFmt = new Intl.DateTimeFormat('en-US', {
    timeZone,
    weekday: 'short'
  })
  const dateFmtISO = new Intl.DateTimeFormat('en-CA', {
    timeZone,
    dateStyle: 'short' // guaranteed yyyy-mm-dd in en-CA
  })
  const dowMap: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6
  }

  // If counting only up to "today" in the given TZ, compute that day number
  let maxDay = daysInMonth
  if (untilToday) {
    const todayParts = new Intl.DateTimeFormat('en-CA', {
      timeZone,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).formatToParts(new Date())
    const todayYear = Number(todayParts.find(p => p.type === 'year')!.value)
    const todayMonth = Number(todayParts.find(p => p.type === 'month')!.value)
    const todayDay = Number(todayParts.find(p => p.type === 'day')!.value)
    if (todayYear === year && todayMonth === month) {
      maxDay = Math.min(maxDay, todayDay)
    } else if (todayYear < year || (todayYear === year && todayMonth < month)) {
      maxDay = 0 // month is in the future relative to today in TZ
    }
  }

  let workingDays = 0

  for (let d = 1; d <= maxDay; d += 1) {
    // Construct in UTC to avoid local TZ DST skew; we always interpret via `timeZone`
    const date = new Date(Date.UTC(year, monthIdx, d))

    const dowShort = weekdayFmt.format(date) // e.g. 'Mon'
    const dow = dowMap[dowShort]

    if (weekend.has(dow)) continue

    const iso = dateFmtISO.format(date) // yyyy-mm-dd in `timeZone`
    if (holidays.has(iso)) continue

    workingDays += 1
  }

  const workingHours = workingDays * hoursPerDay
  const total = workingHours * hourlyRate

  return { year, month, workingDays, workingHours, total }
}
