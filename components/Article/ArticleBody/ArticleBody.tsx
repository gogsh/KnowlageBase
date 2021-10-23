import React, { useState, useEffect, useContext } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import { Article } from '../../../types/Article.types'
import LanguageContext from '../../../context/LanguageContext'

import { toast } from 'react-toastify'

import {
  Wrapper,
  СreateArticleWrapper,
  ArticleLabel,
  ArticleHeader,
  MarkdownContainer,
} from './ArticleBodyStyle'

import Button from '../../UI/Button/Button'
import Input from '../../UI/Input/Input'
import Icon from '../../UI/Icon/Icon'

import md from '../../../middleware/markdownIt'

interface Props {
  articles: Article[]
  currentArticleId: string
  setArticles: any
  saveArticle: any
  newArticleNameHandler: any
  createArticleHandler: any
  newArticleName: string
}

const ArticleBody: React.FC<Props> = ({
  articles,
  currentArticleId,
  setArticles,
  saveArticle,
  newArticleNameHandler,
  createArticleHandler,
  newArticleName,
}: Props) => {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null)
  const [currentArticleIndex, setСurrentArticleIndex] = useState<number | null>(null)
  const [isEditable, setIsEditable] = useState<boolean>(false)
  const L = useContext(LanguageContext).Article

  useEffect(() => {
    if (articles) {
      articles.forEach((article, index) => {
        if (article._id === currentArticleId) {
          setCurrentArticle(article)
          setСurrentArticleIndex(index)
          if (article.body === '') {
            setIsEditable(true)
          }
        }
      })
    }
  }, [articles, currentArticleId])

  function articleChangeHandler(e) {
    const duplicate = _generateArticleDublicate(e)

    setCurrentArticle(duplicate)
    const updateArticles = [...articles]
    updateArticles[currentArticleIndex] = duplicate
    setArticles(updateArticles)
    saveArticle(duplicate, 1000)
    toast.error('тестируем')
  }

  function _generateArticleDublicate(e) {
    return {
      ...currentArticle,
      [e.target.name]: e.target.value,
    }
  }

  return (
    <Wrapper>
      {currentArticleId ? (
        <>
          {currentArticle ? (
            <>
              {isEditable ? (
                <>
                  <ArticleHeader>
                    <div className={'ArticleHeader__left-side'}>
                      <ArticleLabel>{L.fileName}</ArticleLabel>
                      <input
                        onChange={articleChangeHandler}
                        spellCheck={false}
                        className={'ArticleHeader__file-name-input'}
                        name={'name'}
                        placeholder={L.writeName}
                        value={currentArticle.name}
                      />
                    </div>
                    <div className={'ArticleHeader__right-side'}>
                      <Icon
                        type={'delete'}
                        clickHandler={() => {
                          console.log(1)
                        }}
                        color={'#E64C3C'}
                      />
                      <Icon
                        type={'check'}
                        clickHandler={() => {
                          setIsEditable(!isEditable)
                        }}
                      />
                    </div>
                  </ArticleHeader>

                  <TextareaAutosize
                    onChange={articleChangeHandler}
                    id={'Article-textarea'}
                    name={'body'}
                    value={currentArticle.body}
                    spellCheck={false}
                    placeholder={L.writeBody}
                  />
                  <br />
                  <hr
                    style={{
                      height: '1px',
                      border: 'none',
                      background: '#EBEBEB',
                      width: '100%',
                    }}
                  />
                  <MarkdownContainer
                    opacity={'30%'}
                    dangerouslySetInnerHTML={{
                      __html: md.render(currentArticle.body),
                    }}></MarkdownContainer>
                </>
              ) : (
                <>
                  <ArticleHeader>
                    <ArticleLabel className={'ArticleBody__file-name'}>
                      {currentArticle.name}
                    </ArticleLabel>
                    <Icon
                      type={'edit'}
                      clickHandler={() => {
                        setIsEditable(!isEditable)
                      }}
                    />
                  </ArticleHeader>
                  <MarkdownContainer
                    dangerouslySetInnerHTML={{
                      __html: md.render(currentArticle.body),
                    }}></MarkdownContainer>
                </>
              )}
            </>
          ) : (
            <>loader...</>
          )}
        </>
      ) : (
        <СreateArticleWrapper>
          <Input
            placeholder={L.writeName}
            onChange={newArticleNameHandler}
            size={'normal'}
            name={'name'}
          />
          <Button
            clickHandler={createArticleHandler}
            text={L.createArticleButton}
            size={'normal'}
            type={newArticleName ? 'primary' : 'disabled'}
          />
        </СreateArticleWrapper>
      )}
    </Wrapper>
  )
}

export default ArticleBody
