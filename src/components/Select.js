import React from 'react'

export const Select = ({children, className ,variant, ...rest}) => {
  return (
    <select className={`form-select ${variant?variant:''} ${className}`} {...rest}>{children}</select>
  )
}

export default Select