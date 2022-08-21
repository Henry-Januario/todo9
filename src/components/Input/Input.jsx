import React from 'react'

const Input = ({type, texto, className}) => {
  return (
    <input className={className} type={type} texto={texto}/>
  )
}

export default Input