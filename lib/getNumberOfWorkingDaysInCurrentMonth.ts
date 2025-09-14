import { eachDayOfInterval, endOfMonth, getDay, startOfMonth } from "date-fns"

export const getWorkingDaysInCurrentMonth = () => {
  const now = new Date()
  const start = startOfMonth(now)
  const end = endOfMonth(now)

  const days = eachDayOfInterval({ start, end })

  return days.filter((day) => {
    const d = getDay(day)
    return d !== 0 && d !== 6
  }).length
}

export const getWorkingHoursInCurrentMonth = (workingHoursPerDay: number = 8) =>
  getWorkingDaysInCurrentMonth() * workingHoursPerDay
