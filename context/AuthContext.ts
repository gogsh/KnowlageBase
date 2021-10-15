import { createContext } from 'react'
import { AuthContextType } from '../types/Auth.types'

const AuthContext: AuthContextType = {
  token: null,
  userId: null,
  nickname: null,
  login: () => {},
  logout: () => {},
}

export default createContext(AuthContext)
