import { createContext } from 'react'
import { Translation } from '../types/Language.types'

const LanguageContex: { changeLanguage: any; currentLang: string; translation: Translation } = {
  changeLanguage: () => {},
  currentLang: '',
  translation: {
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
        articleCreateError: '',
      },
      menu: {
        light: '',
        dark: '',
      }
    },
  },
}

export default createContext(LanguageContex)
