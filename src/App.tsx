import React, { useContext, useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { ModeContext } from './context/modeProvider/ModeProvider';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import Skills from './components/Skills/Skills';
import scrollTop from "./assest/images/icons8-arrow-64.png";
import Education from './components/Education/Education';

function App() {
  const {mode} = useContext(ModeContext);
  const[showScroll,setShowScroll] = useState(false);
  const controlScroll = () => {
  if(window.scrollY > 10) {
    setShowScroll(true);
  }
  else {
    setShowScroll(false);
  }
}
  useEffect(() => {
    window.addEventListener('scroll', controlScroll);
    return () => {
      window.removeEventListener('scroll', controlScroll);
    };
  }, []);
  return (
    <div className={mode==="dark"?"dark-container":"white-container"}>
      <Header/>
      <div className='content'>
        <Home />
        <Skills />
        <Education />
          <img className={`scroll-top ${showScroll?"scroll-top-show":null}`} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})} src={scrollTop} alt='top' />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
