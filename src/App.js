import './App.css';

import Home from './Pages/Home';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegForm from './Sections/RegistrationForm/RegForm';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Routes>
          <Route path="/register" element={<RegForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
