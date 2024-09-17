import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Characters from './components/Characters';
import Character from './components/Character';
import SignIn from './components/SignIn';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/characters' element={<Characters />}/>
        <Route path='/characters/:id' element={<Character />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
