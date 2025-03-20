import React from 'react'

export const Footer = () => {
  return (
    <div className="text-white flex items-center justify-center fira-code w-full h-60 mt-30 mb-20 md:mb-10">

      <div className="flex justify-between w-10/12">

        <h4 className="hidden sm:block font-footer">© 2025 Rogerio Cardoso • Dev Front End</h4> {/* Esconde o h4 apenas em telas pequenas */}
        
        <div className="flex gap-9">
          <div className="flex flex-col gap-7 transition-all">

            <h1 className="font-menu-horizontal bold text-[#fff]"><span className="text-[#6060dd]">#</span>redes-sociais</h1>

            <ul className="flex flex-col gap-5">
              <li className="hover:text-[#6e6e6e] duration-800"><a href="https://www.figma.com/@rcjuniordev" target="_blank">figma</a></li>

              <li className="hover:text-[#6e6e6e] duration-800 "><a href="https://github.com/rcj-dev" target="_blank">github</a></li>
              
              <li className="hover:text-[#6e6e6e] duration-800 "><a href="https://www.instagram.com/jxnior____/?utm_source=qr&igsh=MXNlaDQxNWtqYXZ6ag%3D%3D#" target="_blank">instagram</a></li>

              <li className="hover:text-[#6e6e6e] duration-800 "><a href="https://www.linkedin.com/in/rogerio-cardoso-junior/" target="_blank">linkedin</a></li>
            </ul>

          </div> 
          

          <div className="flex flex-col gap-7 transition-all">

            <h1 className="font-menu-horizontal bold text-[#fff]"><span className="text-[#6060dd]">#</span>contato</h1>

            <ul className="flex flex-col gap-5">
              <li className="hover:text-[#6e6e6e] duration-800"><a href="https://wa.me/qr/C26R5JGRGNI2F1" target="blank">whatsapp</a></li>         
            </ul>
          </div> 

        </div>

      </div>
    </div>
  )
}

export default Footer;
