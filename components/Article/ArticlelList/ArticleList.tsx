import React, { useEffect } from 'react'
import { Article, getArticles } from '../../../types/Article.types'
import { Wrapper } from './ArticleListStyles'

import { setArticleId } from '../../../helpers/LocalStorage'

interface Props {
  getArticles: getArticles
  articles: Article[]
  setCurretArticleId: any
  currentArticle: string
}

const ArticleList: React.FC<Props> = ({
  getArticles,
  articles,
  setCurretArticleId,
  currentArticle,
}: Props) => {
  useEffect(() => {
    getArticles()
  }, [])

  function articleClickHandler(e) {
    setCurretArticleId(e.target.id)
    setArticleId(e.target.id)
  }

  return (
    <>
      <Wrapper>
        <ul>
          {articles ? (
            articles.map(article => {
              return currentArticle !== article._id ? (
                <li key={article._id}>
                  <button
                    onClick={articleClickHandler}
                    id={article._id}
                    className='Article-list__article-link'>
                    {article.name}
                  </button>
                </li>
              ) : (
                <li key={article._id}>
                  <button
                    id={article._id}
                    className='Article-list__article-link_selected'>
                    {article.name}
                  </button>
                </li>
              )
            })
          ) : (
            <div>loader...</div>
          )}
        </ul>
      </Wrapper>
    </>
  )
}

export default ArticleList
