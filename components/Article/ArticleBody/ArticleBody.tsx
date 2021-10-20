import React, { useState, useEffect, useContext } from 'react'
import { Article } from '../../../types/Article.types'
import LanguageContext from '../../../context/LanguageContext'

import { Wrapper } from './ArticleBodyStyle'

interface Props {
  articles: Article[]
  currentArticleId: string
  setArticles: any
  saveArticle: any
  newArticleNameHandler: any
  createArticleHandler: any
}

const ArticleBody: React.FC<Props> = ({
  articles,
  currentArticleId,
  setArticles,
  saveArticle,
  newArticleNameHandler,
  createArticleHandler,
}: Props) => {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null)
  const [currentArticleIndex, setСurrentArticleIndex] = useState<number | null>(null)
  const L = useContext(LanguageContext).Article

  useEffect(() => {
    if (articles) {
      articles.forEach((article, index) => {
        if (article._id === currentArticleId) {
          setCurrentArticle(article)
          setСurrentArticleIndex(index)
        }
      })
    }
  }, [articles, currentArticleId])

  function articleChangeHandler(e) {
    const duplicate = _generateDublicate(e)

    setCurrentArticle(duplicate)
    const updateArticles = [...articles]
    updateArticles[currentArticleIndex] = duplicate
    setArticles(updateArticles)
    saveArticle(duplicate, 1000)
  }

  function _generateDublicate(e) {
    /** if its casual input/textarea field */
    if (e.target.name) {
      return {
        ...currentArticle,
        [e.target.name]: e.target.value,
      }
      /** else if its HTML element like H1 */
    } else {
      return {
        ...currentArticle,
        [e.target.className]: e.target.innerHTML,
      }
    }
  }

  return (
    <Wrapper>
      {currentArticleId ? (
        <>
          {currentArticle ? (
            <>
              <input
                onChange={articleChangeHandler}
                spellCheck={false}
                name='name'
                placeholder={L.writeHeading}
                value={currentArticle.name}
              />
              <textarea
                onChange={articleChangeHandler}
                name='body'
                cols={30}
                rows={10}
                value={currentArticle.body}
                spellCheck={false}
                placeholder={L.writeBody}></textarea>
            </>
          ) : (
            <>loader...</>
          )}
        </>
      ) : (
        <>
          <input type='text' onChange={newArticleNameHandler} />
          <button onClick={createArticleHandler}>create</button>
        </>
      )}
    </Wrapper>
  )
}

export default ArticleBody
