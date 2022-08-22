import React from 'react'
import S from './P.module.css'

const P = ({texto, className}) => {
  return (
    <div className={className}>
    <p className={S.p}>{texto}</p>
    </div>
  )
}

export default P