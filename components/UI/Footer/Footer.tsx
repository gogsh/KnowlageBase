import { Wrapper } from './FooterStyle'

interface Props {
  children: React.ReactNode
}

function Header({ children }: Props) {
  return <Wrapper>{children}</Wrapper>
}

export default Header
