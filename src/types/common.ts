export type ID = string | number

export type Optional<T> = T | undefined
export type Nullable<T> = T | null
export type Maybe<T> = T | null | undefined

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

export type SortDirection = 'asc' | 'desc'
export type Status = 'pending' | 'filled' | 'cancelled' | 'review'

export type Currency = 'USD' | 'EUR' | 'GBP'

export interface PaginationParams {
  page: number
  pageSize: number
}

export interface PaginatedResponse<T> {
  items: T[]
  page: number
  pageSize: number
  total: number
  totalPages: number
}
