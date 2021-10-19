import { DefaultButton, LinkButton } from './ButtonStyles'

interface Props {
  clickHandler: any
  text: string
  size: 'small' | 'normal' | 'large'
  type: 'disabled' | 'danger' | 'primary' | 'secondary' | 'link'
}

function Button({ clickHandler, text, size, type }: Props) {
  return (
    <>
      {type !== 'link' ? (
        <DefaultButton onClick={clickHandler} size={size} type={type}>
          {text}
        </DefaultButton>
      ) : (
        <LinkButton onClick={clickHandler} size={size}>{text}</LinkButton>
      )}
    </>
  )
}

export default Button
