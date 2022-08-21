import React from 'react'
import Button from '../Button/Button.jsx'
import S from "./Header.module.css";

const Header = () => {
  return (
    <header className={S.header}>
        <h1>uma seleção de produtos</h1>
        <h2>especial para você</h2>
        <p>Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite!</p>
        
        <div className={S.buttons}>
          <Button texto={"Conheça a Linx"} className={S.button}/>
          <Button texto={"Ajude o algorítmo"} className={S.button}/>
          <Button texto={"Seus produtos"} className={S.button}/>
          <Button texto={"Compartilhe"} className={S.button}/>
        </div>

    </header>
  )
}

export default Header