import React from 'react'
import S from "../Button/Button.module.css"

const Button = ({texto}) => {
  return (
    <button className={S.button}>{texto}</button>
  )
}

export default Button