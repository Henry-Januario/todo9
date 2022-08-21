import React from 'react'
import BlocoTexto from '../BlocoTexto/BlocoTexto'
import Form from '../Form/Form'
import S from './FirstSection.module.css'

const FirstSection = () => {
  return (
    <section className={S.firstSection}>
        <BlocoTexto/>
        <Form/>
    </section>
  )
}

export default FirstSection