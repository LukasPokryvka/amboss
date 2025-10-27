export type MutationReturnType<T = unknown> =
  | {
      success: true
      error: null
      data?: T
    }
  | {
      success: false
      error: Error
      data?: null
    }
