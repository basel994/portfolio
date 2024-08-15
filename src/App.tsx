import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { ModeContext } from './context/modeProvider/ModeProvider';

function App() {
  const {mode,changeMode} = useContext(ModeContext);
  console.log(mode);
  return (
    <div className={mode==="dark"?"dark-container":"white-container"}>
      <Header/>
    </div>
  );
}

export default App;
