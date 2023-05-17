import { useState } from 'react';
import Header from './componentes/Header'
import Navbar from './componentes/Navbar'
import Banner from './componentes/Banner'
import Project from './componentes/Project'
import Contact from './componentes/Contact'
import Footer from './componentes/Footer'
import './App.css'

function App() {

  return (
    <div className="App">
   <Header />
   <Project />
 <Contact />
 <Footer />
    </div>
  )
}

export default App
