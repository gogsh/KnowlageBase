import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../context/AuthContext'
import { useArticles } from '../hooks/articles.hook'
import { Article } from '../types/Article.types'

import ArticleList from '../components/ArticlelList/ArticleList'
import ArticleBody from '../components/ArticleBody/ArticleBody'

interface Props {}

const ArticlePage: React.FC<Props> = () => {
  const [currentArticleId, setCurretArticleId] = useState<string | null>(null)
  const [newArticleName, setNewArticleName] = useState<string>('')

  const { userId } = useContext(AuthContext)
  const { createArticle, saveArticle, getArticles, articles, setArticles } =
    useArticles(userId)

  function inputHandler(e) {
    setNewArticleName(e.target.value)
  }

  async function createArticleHandler(e) {
    if (newArticleName !== '') {
      console.log('создаём статью')
      setCurretArticleId(await createArticle(newArticleName))
      getArticles()
    }
    // TODO: toast с ошибкой
  }

  useEffect(() => {}, [])

  return (
    <>
      <div className='container'>
        <header>
          <h2>Main</h2>
          <i>door</i>
        </header>

        <div>
          <ArticleList
            getArticles={getArticles}
            articles={articles}
            setCurretArticleId={setCurretArticleId}
          />
        </div>
        <div>
          {currentArticleId ? (
            <ArticleBody
              articles={articles}
              currentArticleId={currentArticleId}
              setArticles={setArticles}
              saveArticle={saveArticle}
            />
          ) : (
            <>
              <input type='text' onChange={inputHandler} />
              <button onClick={createArticleHandler}>create</button>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ArticlePage
