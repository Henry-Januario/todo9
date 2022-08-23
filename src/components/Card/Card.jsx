import React from 'react'
import Button from '../Button/Button'
import S from "../Card/Card.module.css"

const Card = ({img, nomeDoProduto, descricao, valorDe, valorPor, valorVezes, valorOu}) => {
  return (
    <div className={S.card}>
        <picture className={S.image}>
            <img src={img}/>
        </picture>
        <h4 className={S.h4}>{nomeDoProduto}</h4>
        <p className={S.descricao}>{descricao}</p>
        <p className={S.de}>De: R${valorDe},00</p>
        <p className={S.por}>Por: R${valorPor},00</p>
        <p className={S.ou}>ou R${valorVezes}x de: R${valorOu}</p>
        <Button texto={"Comprar"} className={S.button}/>
    </div>
  )
}

export default Card