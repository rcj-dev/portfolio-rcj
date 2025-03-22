import React from 'react';
import Projects from './Projects';

import MacedoLogo from '../../src/assets/ImagensPortfolios/MacedoFotos/MacedoLogo.png';
import MacedoNote from '../../src/assets/ImagensPortfolios/MacedoFotos/MacedoNote.png';
import MacedoPhone from '../../src/assets/ImagensPortfolios/MacedoFotos/MacedoPhone.png'

import UpLogo from '../../src/assets/ImagensPortfolios/UploadCsvFotos/UpLogo.png';
import UpNote from '../../src/assets/ImagensPortfolios/UploadCsvFotos/UpNote.png';

import PortLogo from '../../src/assets/ImagensPortfolios/PortfolioFotos/PortLogo.png'
import PortPhone from '../../src/assets/ImagensPortfolios/PortfolioFotos/PortPhone.png';
import PortNote from '../../src/assets/ImagensPortfolios/PortfolioFotos/PortNote.png';

import Nft from '../../src/assets/ImagensPortfolios/NftFotos/NftLogo.png';
import NftNote from '../../src/assets/ImagensPortfolios/NftFotos/NftNote.png'

const Portfolio = () => {
  return (
    <div id="portfolios" className="flex flex-col gap-5 items-center mt-20 w-8/12">
      <h1 className="fira-code font-sobre-mim text-[#fff] md:15">
        <span className="text-[#6060dd]">#</span>portfolios
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-4 w-full place-items-center">
        <Projects 
          images={[MacedoLogo, MacedoPhone,MacedoNote]} // Apenas duplicando para teste
          title="Macedo Clínicas"
          description="Projeto real para a empresa Macedo Clínicas, visando uma apresentação profissional de sua empresa de estética e odontologia. Foram utilizadas aplicações como HTML, CSS, JAVASCRIPT, REACT, TAILWIND e FIGMA."
        />
        <Projects 
          images={[UpLogo, UpNote]} // Apenas duplicando para teste
          title="Upload CSV"
          description="Esta é uma aplicação WEB desenvolvida em HTML, CSS, JAVASCRIPT, PYTHON e SQLITE. Ela permite o upload de um arquivo CSV pré-definido que e armazena os dados em um banco de dados SQLite."
          link="https://upbussines.netlify.app/"
        />
        <Projects 
          images={[PortLogo, PortPhone, PortNote]}
          title="Portfólio | Rogerio"
          description="Este é o meu portfólio! 🚀 As aplicações que utilizei para construí-lo foram React para a estrutura dinâmica, Tailwind CSS para um design moderno e responsivo, além de HTML e CSS para a base do projeto. Tudo foi desenvolvido pensando na melhor experiência para quem acessa. Seja bem-vindo!"
          link="https://portfolio-rogerio-cardoso.netlify.app/"
       />
        <Projects 
          images={[Nft, NftNote]} // Apenas duplicando para teste
          title="NFT Project"
          description="Este é o meu projeto NFT! 🖼️ Trata-se de um layout simples para um sistema de venda de NFTs, desenvolvido com HTML e CSS. O foco foi criar uma interface visual agradável, sem funcionalidades avançadas, apenas a estrutura do front-end. "
        />
      </div>
    </div> 
  );
};

export default Portfolio;
