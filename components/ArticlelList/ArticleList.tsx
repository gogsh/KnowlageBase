import React, { useState, useEffect } from 'react'
import { Article, getArticles } from '../../types/Article.types'

interface Props {
  getArticles: getArticles
  articles: Article[]
  setCurretArticleId: any
}

const ArticleList: React.FC<Props> = ({ getArticles, articles, setCurretArticleId }: Props) => {
  useEffect(() => {
    getArticles()
  }, [])

  function articleClickHandler(e) {
    setCurretArticleId(e.target.id)
  }

  return (
    <>
      <ul>
        {articles ? (
          articles.map((article, index) => {
            return (
              <li key={article._id}>
                <button onClick={articleClickHandler} id={article._id}>{article.name}</button>
              </li>
            )
          })
        ) : (
          <div>loader...</div>
        )}
      </ul>
    </>
  )
}

export default ArticleList
