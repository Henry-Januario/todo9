import React from 'react'
import S from './P/P.module.css'

const P = ({texto}) => {
  return (
    <div className={S.paragrafo}>
    <p className={S.p}>{texto}</p>
    </div>
  )
}

export default P