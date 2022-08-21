import React from 'react'


const Label = ({texto, className}) => {
  return (
    <label className={className}>{texto}</label>
  )
}

export default Label