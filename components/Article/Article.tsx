import React, { useState, useContext, useEffect } from 'react'
import AuthContext from '../../context/AuthContext'
import { useArticles } from '../../hooks/articles.hook'

import { getArticleId } from '../../helpers/LocalStorage'

import ArticleHeader from './ArticleHeader/ArticleHeader'
import ArticleList from './ArticlelList/ArticleList'
import ArticleBody from './ArticleBody/ArticleBody'
import ArticleFooter from './ArticleFooter/ArticleFooter'

import { Layout } from './ArticleStyles'

const Article: React.FC = () => {
  const [currentArticleId, setCurretArticleId] = useState<string | null>(() => {
    const initial = getArticleId()
    return initial === 'null' ? JSON.parse(initial) : initial
  })
  const [newArticleName, setNewArticleName] = useState<string>('')

  const { userId } = useContext(AuthContext)
  const {
    createArticle,
    saveArticle,
    getArticles,
    articles,
    setArticles,
    deleteArticle,
  } = useArticles(userId)

  function newArticleNameHandler(e) {
    setNewArticleName(e.target.value)
  }

  async function createArticleHandler(e) {
    if (newArticleName !== '') {
      const newArticleId = await createArticle(newArticleName)
      getArticles()
      setCurretArticleId(newArticleId)
      setNewArticleName('')
    }
  }

  useEffect(() => {
    if (userId) {
      getArticles()
    }
  }, [userId])

  return (
    <>
      <ArticleHeader
        currentArticleId={currentArticleId}
        setCurrentArticleId={setCurretArticleId}
      />
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
          newArticleName={newArticleName}
          deleteArticle={deleteArticle}
          setCurretArticleId={setCurretArticleId}
        />
      </Layout>
      <ArticleFooter />
    </>
  )
}

export default Article
