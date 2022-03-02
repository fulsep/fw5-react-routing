import React from 'react'

export const Button = ({children, block, variant='primary', ...rest}) => {
  return (
    <div className={block?'d-grid':'d-inline-block'}>
        <button className={`btn btn-${variant}`} {...rest}>{children}</button>
    </div>
  )
}

export default Button