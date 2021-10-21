import { Locale, Translation } from '../types/Language.types'

export default class Language {
  Translation: {
    ru: Translation
    eng: Translation
  } = {
    ru: {
      Auth: {
        createAccount: 'создать аккаунт',
        iHaveAccount: 'y меня уже есть аккаунт',
        register: 'зарегистрироваться',
        logIn: 'войти',
        email: 'e-mail',
        password: 'пароль',
        nickname: 'никнейм',
      },
      Article: {
        writeHeading: 'Заголовок',
        writeBody: 'Напишите что-нибудь',
        writeName: 'Название файла',
        createArticleButton: 'Создать'
      }
    },
    eng: {
      Auth: {
        createAccount: 'create account',
        iHaveAccount: 'i am already registred',
        register: 'register',
        logIn: 'log in',
        email: 'e-mail',
        password: 'password',
        nickname: 'nickname',
      },
      Article: {
        writeHeading: 'Heading',
        writeBody: 'Write something',
        writeName: 'File name',
        createArticleButton: 'create'
      }
    },
  }

  constructor(public locale: string) {
    if (typeof window !== 'undefined') {
      const currentLanguage: string = localStorage.getItem('language')
      if (!currentLanguage) {
        if (navigator.language === 'ru-RU' || navigator.language === 'ru') {
          localStorage.setItem('language', 'ru')
          this.locale = 'ru'
        } else {
          localStorage.setItem('language', 'eng')
        }
      } else {
        this.locale = currentLanguage
      }
    }
  }

  setLanguage(newLocale: Locale) {
    this.locale = newLocale
  }
  getTranlation(): Translation {
    return this.Translation[this.locale]
  }
}
