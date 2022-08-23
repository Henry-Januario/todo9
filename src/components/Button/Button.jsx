import React from 'react'

const Button = ({texto, className, onClick}) => {
  return (
    <button className={className} onClick={onClick}>{texto}</button>
  )
}

export default Button