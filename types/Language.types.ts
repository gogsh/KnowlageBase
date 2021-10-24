export type Locale = 'ru' | 'eng'

export type Translation = {
  Auth: {
    createAccount: string
    iHaveAccount: string
    register: string
    logIn: string
    email: string
    password: string
    nickname: string
  }
  Article: {
    writeHeading: string
    writeBody: string
    writeName: string
    createArticleButton: string
    fileName: string
    toast: {
      articleDeleteSuccess: string
      articleDeleteError: string
      articleCreateSuccess: string
      articleCreateError: string
    }
    menu: {
      light: string
      dark: string
    }
  }
}
