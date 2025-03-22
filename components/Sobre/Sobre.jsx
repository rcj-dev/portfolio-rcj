import React from "react";
import Botao from '../Botao/Botao';
import Curriculo from '../../src/assets/Curriculo/Curriculo-Rogerio-Cardoso.pdf'

export const Sobre = () => {
  return (
    <div id="sobre-mim" className="flex justify-center items-center px-4 sm:px-0">
      <div className="fira-code flex flex-col items-center lg:items-start gap-5 w-full sm:w-10/12">
        <h1 className="font-sobre-mim text-[#fff] text-center lg:text-left">
          <span className="text-[#6060dd]">#</span>sobre-mim
        </h1>
        
        <p className="text-[#7c7c7c] text-center lg:text-left">
          Sou apaixonado por Desenvolvimento Front-End, focando em criar interfaces intuitivas e eficientes.
          <br /><br />
          Tenho experiência em HTML, CSS, JavaScript, React e Tailwind, sempre priorizando a experiência do usuário. 
          Busco aplicar boas práticas e entregar soluções de alta qualidade.
          <br /><br />
          Conquistei minha graduação em Análise e Desenvolvimento de Sistemas com 100% de bolsa pelo Prouni e atualmente sou Analista de T.I. 
          na Faculdade ISMD.
          <br /><br />
        </p>
        
        <Botao text="Baixar CV" link={Curriculo} />
      </div>
    </div>
  );
};

export default Sobre;
