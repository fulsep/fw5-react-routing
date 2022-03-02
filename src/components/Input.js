import React from 'react'

export const Input = ({variant, ...rest}) => {
  return (
    <input className={`form-control ${variant?variant:''}`} {...rest} />
  )
}

export default Input