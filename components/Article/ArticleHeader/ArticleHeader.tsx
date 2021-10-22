import Header from '../../UI/Header/Header'
import Icon from '../../UI/Icon/Icon'
import { MenuWrapper } from './ArticleHeaderStyle'
interface Props {}

function ArticleHeader(props: Props) {
  const {} = props
  
  return (
    <Header>
      <h2>Main</h2>
      <MenuWrapper>
        <Icon type={'cog'} clickHandler={() => {console.log(1)}} />
        <Icon type={'door'} clickHandler={() => {console.log(1)}} />
      </MenuWrapper>
    </Header>
  )
}

export default ArticleHeader
