export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'

/** Context of HTTP request
 *  @param loading loading indication
 *  @param error error message
 *  @param request request function
 */
export interface HttpContext {
  loading: Loading
  error: Error
  request: Request
  clearError: ClearError
}

export type UseHttp = {
  (): HttpContext
}

export type Loading = boolean
export type Error = string | null
export type Request = {
  (url: string, method?: Method, body?: any, headers?: any): Promise<any>
}
export type ClearError = {
  (): void
}
