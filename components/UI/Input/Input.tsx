import React from 'react'
import { DefaultInput } from './InputStyles'

interface Props {
  placeholder: string
  size: 'small' | 'normal' | 'large'
  onChange: any
  name: string
  type?: string
}

function Input({ placeholder, size, onChange, name, type }: Props) {
  return (
    <DefaultInput
      placeholder={placeholder || false}
      size={size}
      onChange={onChange}
      name={name || false}
      type={type}
    />
  )
}

export default Input
