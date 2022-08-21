import React from "react";
import S from '../Separator/Separator.module.css'

const Separator = ({texto}) => {
  return (
    <div className={S.separator}>
      <hr className={S.hr}/>
      <h3 className={S.h3}>{texto}</h3>
      <hr className={S.hr}/>
    </div>
  );
};

export default Separator;
