import './App.css';

import Home from './Pages/Home';
import Register from './Pages/Register';
import RegisterForm from './Pages/RegisterForm';
import { HashRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <HashRouter baseline="/">
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/register/:id" element={<RegisterForm/>}/>
          <Route exact path="/" element={<Home/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
