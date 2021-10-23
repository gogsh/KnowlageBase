import { L, DL, SL } from './LinkStyles'

interface Props {
  clickHandler?: any
  text: string
  disabled?: boolean
  selected?: boolean
}

function Link({ clickHandler, text, disabled, selected }: Props) {
  return !disabled ? (
    <>{!selected ? <L onClick={clickHandler}>{text}</L> : <SL>{text}</SL>}</>
  ) : (
    <DL>{text}</DL>
  )
}

export default Link
