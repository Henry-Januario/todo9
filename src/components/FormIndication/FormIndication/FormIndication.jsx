import React from 'react'
import Button from '../../Button/Button'
import Input from '../../Input/Input'
import Label from '../../Label/Label'
import S from './FormIndication.module.css'

const FormIndication = () => {
  return (
    <form className={S.form}>
        <div className={S.inputs}>
            <div className={S.campos}>
                <Label texto="Nome do seu amigo:" className={S.label}/>
                <Input type="text" className={S.input}/>
            </div>
            <div className={S.campos}>
            <Label texto="E-mail:" className={S.label}/>
            <Input type="email" className={S.input}/>
            </div>
        </div>
            <Button className={S.buttonIndication} texto={"Enviar agora"}/>
    </form>
  )
}

export default FormIndication