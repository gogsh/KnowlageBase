import React, { useState, useEffect } from 'react'
import { Article } from '../../types/Article.types'

interface Props {
  articles: Article[]
  currentArticleId: string
  setArticles: any
  saveArticle: any
}

const ArticleBody: React.FC<Props> = ({
  articles,
  currentArticleId,
  setArticles,
  saveArticle,
}: Props) => {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null)
  const [currentArticleIndex, setСurrentArticleIndex] = useState<number | null>(null)

  useEffect(() => {
    articles.forEach((article, index) => {
      if (article._id === currentArticleId) {
        setCurrentArticle(article)
        setСurrentArticleIndex(index)
      }
    })
  }, [currentArticleId])

  function articleChangeHandler(e) {
    const duplicate = {
      ...currentArticle,
      [e.target.name]: e.target.value
    }
    setCurrentArticle(duplicate)
    const updateArticles = [...articles]
    updateArticles[currentArticleIndex] = duplicate
    setArticles(updateArticles)
    saveArticle(duplicate, 1000)
  }

  return (
    <>
      {currentArticle ? (
        <>
          <h1>{currentArticle.name}</h1>
          <textarea
            onChange={articleChangeHandler}
            name='body'
            id=''
            cols={30}
            rows={10}
            value={currentArticle.body}></textarea>
        </>
      ) : (
        <div>loader...</div>
      )}
    </>
  )
}

export default ArticleBody
