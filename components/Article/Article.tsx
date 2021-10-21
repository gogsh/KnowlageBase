import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/AuthContext'
import { useArticles } from '../../hooks/articles.hook'

import ArticleHeader from './ArticleHeader/ArticleHeader'
import ArticleList from './ArticlelList/ArticleList'
import ArticleBody from './ArticleBody/ArticleBody'

import { Layout } from './ArticleStyles'

const Article: React.FC = () => {
  const [currentArticleId, setCurretArticleId] = useState<string | null>(null)
  const [newArticleName, setNewArticleName] = useState<string>('')

  const { userId } = useContext(AuthContext)
  const { createArticle, saveArticle, getArticles, articles, setArticles } =
    useArticles(userId)

  function newArticleNameHandler(e) {
    setNewArticleName(e.target.value)
  }

  async function createArticleHandler(e) {
    if (newArticleName !== '') {
      const newArticleId = await createArticle(newArticleName)
      getArticles()
      setCurretArticleId(newArticleId)
    }
    // TODO: toast с ошибкой
  }

  useEffect(() => {
    if (userId) {
      getArticles()
    }
  }, [userId])

  return (
    <>
      <ArticleHeader />
      <Layout>
        <ArticleList
          getArticles={getArticles}
          articles={articles}
          setCurretArticleId={setCurretArticleId}
          currentArticle={currentArticleId}
        />
        <ArticleBody
          articles={articles}
          currentArticleId={currentArticleId}
          setArticles={setArticles}
          saveArticle={saveArticle}
          newArticleNameHandler={newArticleNameHandler}
          createArticleHandler={createArticleHandler}
          newArticleName = {newArticleName}
        />
      </Layout>
    </>
  )
}

export default Article
