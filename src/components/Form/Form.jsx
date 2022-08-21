import React from "react";
import S from "./Form.module.css";
import Label from "../Label/Label.jsx";
import Input from "../Input/Input.jsx";
import Button from "../Button/Button";

const Form = () => {
  return (
    <form className={S.form}>
      <div className={S.infosForm}>
        <Label texto="Seu nome:"/>
        <br />
        <Input type="text" className={S.input}/>
        <br />

        <Label texto="E-mail:"/>
        <br />
        <Input type="email" className={S.input}/>
        <br />

        <Label texto="CPF:"/>
        <br />
        <Input type="text" className={S.input}/>
        <br />
      </div>

      <div>
        <Input type="radio" className={S.radio} />
        <Label texto="Feminino" className={S.label}/>

        <Input type="radio" className={S.radio} />
        <Label texto="Masculino" className={S.label}/>
      </div>

      <Button className={S.formButton} texto={"Enviar"}/>
    </form>
  );
};

export default Form;
