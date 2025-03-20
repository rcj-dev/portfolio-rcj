import React, { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center text-white pt-6 pb-4 md:pl-10 md:pr-10 px-6 w-full">
        <span className="font-logo fira-code hover:cursor-default">
          <span className="text-[#6060dd]">//</span>Rogerio
        </span>

        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button className="text-white text-2xl">
            {isOpen ? '✖︎' : '☰'}
          </button>
        </div>

        <ul
          className={`${
            isOpen ? 'flex' : 'hidden'
          } 
          font-menu-horizontal
          fira-code
          flex-col 
          items-center 
          gap-6 
          absolute 
          top-16 
          left-0 
          right-0 
          p-4

          md:flex-row 
          md:gap-15 
          md:relative 
          md:flex 
          md:bg-transparent 
          md:top-auto 
          md:left-auto 
          md:right-auto 
          md:p-0
          transition-all 
          duration-300`}
        >
          <li className="hover:opacity-60 duration-300">
            <a href="#sobre-mim"> <span className="text-[#6060dd]">#</span>sobre-mim</a>
          </li>
          <li className="hover:opacity-60 duration-300">
            <a href="#portfolios"><span className="text-[#6060dd]">#</span>portfolios</a>
          </li>
          <li className="hover:opacity-60 duration-300">
            <a href="#skills-section"><span className="text-[#6060dd]">#</span>skills</a>
          </li>
          <li className="hover:opacity-60 duration-300">
            <a href="#contatos"><span className="text-[#6060dd]">#</span>contatos</a>
          </li>
        </ul>
      </nav>

      <div className={`md:hidden ${isOpen ? 'mt-40' : 'mt-0'} transition-all duration-400`}></div>
    </>
  );
};

export default Navbar;
