/** Generating auth context */
export type UseAuth = {
  () : AuthContextType
}

/** Interface of Auth context
 * @param token current session JWT token
 * @param userId registred user id
 * @param login login handler
 * @param login logout handler
 */
 export interface AuthContextType {
  token: Token,
  userId: UserId,
  nickname: Nickname,
  login: LoginHandler,
  logout: LogoutHandler,
}

/** Interface of form in Auth Component */
export interface AuthForm {
  nickname: string
  email: string
  password: string
}

/** Login function */
export type LoginHandler = {
  (jwtToken: any, id: any, nickname: any) : void
}

export type LogoutHandler = {
  () : void
}

export type Token = string | null
export type UserId = string | null
export type Nickname = string | null
