import React, { useState, useEffect } from 'react';
import retrato from '../../src/assets/picture.png';
import Botao from '../Botao/Botao';

export const Home = () => {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState('');
  const fullText = "Crio sites responsivos onde as tecnologias encontram a criatividade.";

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 100);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-auto h-auto pb-10">
      <div className="
        flex 
        flex-col-reverse 
        md:gap-3 
        md:flex-row 
        items-center 
        text-center 
        md:text-left 
        justify-center
        m-10 
        gap-6 
        px-10 
        md:px-30 
        mx-auto
      ">
        
        <div className="flex flex-col items-center md:items-start gap-5 fira-code">
          <h1 className="font-h1 text-4xl text-[#FFFFFF] md:w-3/4">
            olá, sou <span className="text-[#6060dd]">Rogerio! </span>
            seu <span className="text-[#6060dd]">desenvolvedor front-end.</span>
          </h1>

          <p className="font-p text-[#FFFFFF] text-sm md:text-base max-w-lg">
            {text}
          </p>

          <Botao text="Entre em Contato!" link="https://wa.me/qr/C26R5JGRGNI2F1"/>
        </div>

        <a href="https://github.com/rcj-dev" target="_blank">
          <img
            src={retrato}
            alt="Foto de Rogerio"
            className={`
              w-50
              md:w-80
              max-w-xs
              mb-5 
              transition-all 
              duration-1000 
              ease-in-out 
              ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"} 
              hover:scale-105
            `}
          />
        </a>
      </div>
    </div>
  );
};

export default Home;
