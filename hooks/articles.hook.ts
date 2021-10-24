import { useState } from 'react'
import { Article } from '../types/Article.types'
import { useHttp } from './http.hook'
import { setArticleId } from '../helpers/LocalStorage'

/** Hook to work with article API
 * @param userId who creating the article
 * ---------------------------------------------
 * @returns :
 * @loading request status
 * @error error message
 * @clearError clear the error message
 * @createArticle create new Article
 * @changeArticle change Article ['name'] or ['body'] fields
 * @articles all created articles
 */
export const useArticles = (userId: string) => {
  const [articles, setArticles] = useState<Article[] | null>(null)
  const { loading, request, error, clearError } = useHttp()

  /** Get all created articles */
  const getArticles = async () => {
    const articles = await request(process.env.DOMAIN + '/api/article/getAll', 'POST', {
      userId,
    })
    setArticles(articles)
    if(articles.length === 0) {
      localStorage.setItem('currentArticleId', '')
    }
  }

  /** Create article
   * @param articleName name of new article
   * @returns id of new article
   */
  const createArticle = async (articleName: string) => {
    const articleId = await request(process.env.DOMAIN + '/api/article/create', 'POST', {
      userId,
      articleName,
    })
    setArticleId(articleId)
    return articleId
  }

  const deleteArticle = async (articleId: string) => {
    const status = await request(process.env.DOMAIN + '/api/article/delete', 'POST', {
      userId,
      articleId,
    })
    getArticles()
    return status
  }

  /** timeout for autosave */
  const [saveTimeout, setSaveTimeout] = useState<number | null>(null)

  /** save changes */
  async function saveArticle(article: Article, timeOut) {
    /** autosave logic */
    if (saveTimeout) {
      window.clearTimeout(saveTimeout)
      const newTimeout = _saveArticleRequest(article, timeOut)
      setSaveTimeout(newTimeout)
    } else {
      const timeout = _saveArticleRequest(article, timeOut)
      setSaveTimeout(timeout)
    }
  }

  function _saveArticleRequest(article: Article, timeOut) {
    if (timeOut) {
      return window.setTimeout(() => {
        request(process.env.DOMAIN + '/api/article/edit', 'POST', {
          userId,
          article,
        })
      }, timeOut)
    } else {
      request(process.env.DOMAIN + '/api/article/edit', 'POST', {
        userId,
        article,
      })
    }
  }

  return {
    loading,
    createArticle,
    saveArticle,
    deleteArticle,
    getArticles,
    error,
    clearError,

    articles,
    setArticles,
  }
}
