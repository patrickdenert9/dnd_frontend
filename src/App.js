import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from './components/Characters';
import Character from './components/Character';
import SignIn from './components/SignIn';
import { useRef } from 'react';



function App() {
  const contextMenuRef = useRef(null)
  return (
    <div className='App' onContextMenu={(e) => {
      //e.preventDefault();                                             // turn off default context menu for components
    }}>
      <BrowserRouter>
            <Routes>
              <Route path='/characters' element={<Characters />}/>
              <Route path='/characters/:id' element={<Character />} />
              <Route path='/signin' element={<SignIn />} />
            </Routes>
      </BrowserRouter>

     
    </div>
    
  );
}

export default App;
