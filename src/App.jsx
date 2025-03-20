import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Home from '../components/Home/Home'
import Sobre from '../components/Sobre/Sobre';
import Contato from '../components/Contato/Contato';
import Footer from '../components/Footer/Footer';
import Skills from '../components/Skills/Skills';
import Portfolio from '../components/Portfolio/Portfolio';


export const App = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <Home />
      <Sobre />
      <Portfolio />
      <Skills />
      <Contato />
      <Footer />
    </div>
  )
}
export default App;