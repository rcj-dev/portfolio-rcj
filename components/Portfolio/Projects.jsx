import React, { useState } from 'react';

const Projects = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Projeto clicável */}
      <div 
        className="w-full sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[110%]  
          relative h-60 hover:scale-105 transition-all duration-300 overflow-hidden group cursor-pointer"
        onClick={openModal}
      >
        <img 
          src={props.image} 
          alt="Project" 
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-[#13131F] to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        <h1 className="fira-code absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white text-lg w-full px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          ver mais
        </h1>
      </div>

      {/* Modal */}
      {isOpen && (
  <div className="fira-code fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.4)] backdrop-blur-sm z-50 p-4">
    <div className="bg-[#13131F] p-6 shadow-lg w-full max-w-[90%] md:max-w-lg lg:max-w-xl xl:max-w-2xl flex flex-col items-start gap-4 max-h-[90vh] overflow-y-auto">

      <img 
        src={props.image} 
        alt={props.title} 
        className="w-full max-h-60 object-cover"
      />

      <h2 className="text-white text-lg md:text-2xl font-bold text-center">{props.title}</h2>

      <p className="text-gray-400 text-sm md:text-base">{props.description}</p>

      <a href={props.link} target="_blank">
        <p className="text-blue-600 underline font-bold"> Acessar projeto </p>
        </a>

      {/* Botão para fechar o modal */}
      <button 
        onClick={closeModal} 
        className="
        mt-4
      text-white 
        px-4 
        py-2 
        transition-all
        duration-500 
        w-full
        border-[#6060dd]
        border
        hover:cursor-pointer
        hover:bg-[#6060dd]
        hover:scale-97
        "
      >
        Fechar
      </button>
    </div>
  </div>
)}


    </>
  );
};

export default Projects;
