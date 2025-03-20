import React from 'react'

const Botao = (props) => {

  return (
    <a href={props.link} download target="blank">
      <button className="
        border-[#6060dd] 
        border 
        px-6 py-2
        text-white 
        hover:cursor-pointer
        hover:bg-[#6060dd]
        hover:scale-97
        transition-all 
        duration-700
        w-80
        md:w-60">

        {props.text}
        
      </button>
    </a>
  )
}

export default Botao;