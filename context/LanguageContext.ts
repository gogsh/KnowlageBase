import { createContext } from 'react'
import { Translation } from '../types/Language.types'

const LanguageContex: Translation = {
  Auth: {
    createAccount: '',
    iHaveAccount: '',
    register: '',
    logIn: '',
    email: '',
    password: '',
    nickname: '',
  },
  Article: {
    writeHeading: '',
    writeBody: '',
<<<<<<< HEAD
    writeName: '',
    createArticleButton: '',
=======
>>>>>>> bac7dd7d9848ef33bdc433bd837c9b0c6b2eb884
  }
}

export default createContext(LanguageContex)
