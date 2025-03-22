import React from "react";
import Seta from '../../src/assets/Imagens/seta.svg'

const BotaoContato = (props) => {
  return (
    <a href={props.link} target="blank">
      <button className="
        bg-[#13131F]
        text-white 
        pl-7
        pr-7
        pt-4
        pb-4 
        text-center 
        fira-code
        hover:cursor-pointer
        hover:scale-95
        transition
        duration-600
        w-full
        h-full
        flex
        items-center
        justify-between
        gap-3 
      ">
        <div className="flex flex-row gap-4 items-center">
          <img src={props.icon} alt="" className="w-7"/>
          {props.text}
        </div>

        <img src={Seta} alt="" />

      </button>
    </a>
    
  )
}
export default BotaoContato;