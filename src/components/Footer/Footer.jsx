import React from 'react'
import P from '../P/P'
import S from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={S.footer} >
        <div className={S.paragrafoFooter}>
        <P texto={"Testando suas habilidades em HTML, CSS e JS."} className={S.p}/>
        <P texto={"Linx Impulse"} className={S.p}/>
        <P texto={"2019"} className={S.p}/>
        </div>
    </footer>
  )
}

export default Footer