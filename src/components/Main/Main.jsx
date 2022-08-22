import React from "react";
import FormIndication from '../FormIndication/FormIndication'
import P from '../P/P'
import FirstSection from '../Section/FirstSection'
import Separator from '../Separator/Separator'
import S from "../Main/Main.module.css"

const Main = () => {
  return (
    <div>
      <FirstSection />
      <Separator texto={"Sua seleção especial"} />
      <Separator texto={"Compartilhe a novidade"} />
      <P texto={"Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!"} className={S.p}/>
      <FormIndication />
    </div>
  );
};

export default Main;
