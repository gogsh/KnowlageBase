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
    writeName: '',
    createArticleButton: '',
    fileName: '',
    toast: {
      articleDeleteSuccess: '',
      articleDeleteError: '',
      articleCreateSuccess: '',
      articleCreateError:'',
    }
  }
}

export default createContext(LanguageContex)
