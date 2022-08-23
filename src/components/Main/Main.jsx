import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FormIndication from '../FormIndication/FormIndication'
import P from '../P/P'
import FirstSection from '../Section/FirstSection'
import Separator from '../Separator/Separator'
import S from "../Main/Main.module.css"
import Card from "../Card/Card";
import Button from "../Button/Button";

const Main = () => {
  const [informacoes, setInformacoes] = useState([]);
  const [products, setProducts] = useState(1)

  async function handleRequisicao() {
    const response = await fetch(
      `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${products}`
    );
    const json = await response.json();
    setInformacoes([...informacoes,...json.products]);
  }

  useEffect(() => {
    handleRequisicao();
  }, [products]);

  const nextProducts = ()=>{
    setProducts(products + 1)
  }

  return (
    <div>
      <FirstSection />
      <Separator texto={"Sua seleção especial"} />
      <div className={S.cards}>
          {informacoes.length>0 &&
            informacoes.map((item,index) => {
              return (
                <Card
                  key={index}
                  img={item.image}
                  nome={item.name}
                  desc={item.description}
                  valorDe={item.oldPrice}
                  valorPor={item.price}
                  valorVezes={item.installments.count}
                  ou={item.installments.value}
                />
              );
            })}
        </div>
      <Button onClick={nextProducts} texto={"Ainda mais produtos aqui"} />
      <Separator texto={"Compartilhe a novidade"} />
      <P texto={"Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!"} className={S.p}/>
      <FormIndication />
    </div>
  );
};

export default Main;
