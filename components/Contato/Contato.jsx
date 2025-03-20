import React from "react";
import BotaoContato from '../Botao/BotaoContato';
import Whatsapp from '../../src/assets/Imagens/whatsapp.svg'
import Git from '../../src/assets/Imagens/github.svg'
import Linkedin from '../../src/assets/Imagens/linkedin.svg'
import Email from '../../src/assets/Imagens/email.svg'

export const Contato = () => {
  
  return (
    <div id="contatos" className="flex flex-col items-center w-full bg-[#0D0E11] mt-20 px-4 md:pt-20 md:pb-20 pt-10 pb-10 ">
      
      <div className="fira-code flex flex-col items-center gap-3 text-center mb-10 ">
        <h1 className="font-h1 text-3xl text-[#a7a7a7]">Gostou do meu trabalho? ☕</h1>
        <p className="text-[#a7a7a7]">Entre em contato comigo!</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-[90%] md:max-w-[80%] lg:max-w-[60%]">
       
        <BotaoContato text="whatsapp" icon={Whatsapp} link="https://wa.me/qr/C26R5JGRGNI2F1"/>
        <BotaoContato text="github" icon={Git} link="https://github.com/rcj-dev" />
        <BotaoContato text="linkedin" icon={Linkedin} link="https://www.linkedin.com/in/rogerio-cardoso-junior/"/>
        <BotaoContato text="email" icon={Email} link="mailto:rcjunior018@gmail.com?subject=Contato&body=Olá, Rogerio!"/>

      </div>

    </div>
  );
}

export default Contato;
