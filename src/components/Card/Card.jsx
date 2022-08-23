import React from 'react'
import S from "../Card/Card.module.css"

const Card = ({img, nomeDoProduto, descricao, valorDe, valorPor, valorVezes, valorOu}) => {
  return (
    <div>
        <picture>
            <img src={img}/>
        </picture>
        <h4 className={S.h4}>{nomeDoProduto}</h4>
        <p className={S.descricao}>{descricao}</p>
        <p className={S.de}>De:{valorDe},00</p>
        <p className={S.por}>Por:{valorPor},00</p>
        <p className={S.ou}>ou {valorVezes}x de:{valorOu}</p>
    </div>
  )
}

export default Card