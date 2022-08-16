import './App.css';

import Home from './Pages/Home';
import Register from './Pages/Register';
import RegisterForm from './Pages/RegisterForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/register/:id" element={<RegisterForm/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
