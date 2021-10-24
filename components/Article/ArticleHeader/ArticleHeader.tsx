import { useContext } from 'react'
import LanguageContext from '../../../context/LanguageContext'
import Header from '../../UI/Header/Header'
import Link from '../../UI/Link/Link'
import ArtcileMenu from './ArtcileMenu/ArtcileMenu'

interface Props {
  currentArticleId: string
  setCurrentArticleId: any
}

function ArticleHeader({ currentArticleId, setCurrentArticleId }: Props) {
  const L = useContext(LanguageContext).translation.Article

  return (
    <Header>
      {currentArticleId ? (
        <Link
          clickHandler={() => {
            setCurrentArticleId(null)
          }}
          text={L.createArticleButton}
        />
      ) : (
        <Link text={L.createArticleButton} selected={true} />
      )}

      <ArtcileMenu/>

    </Header>
  )
}

export default ArticleHeader
