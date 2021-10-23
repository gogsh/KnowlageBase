import React from 'react'
import { DefaultInput } from './InputStyles'

interface Props {
  placeholder: string
  size: 'small' | 'normal' | 'large'
  onChange: any
  name: string
  type?: string
  value?: string
}

function Input({ placeholder, size, onChange, name, type, value }: Props) {
  return (
    <DefaultInput
      placeholder={placeholder || false}
      size={size}
      onChange={onChange}
      name={name || false}
      type={type}
      value={value}
    />
  )
}

export default Input
