import { useState } from 'react';
/* import './App.css' */
import Login from './pages/Login';
import Test from './pages/Test';
import Cadastro from './pages/Cadastro';
import { AuthProvider } from './pages/Contexts/AuthContext';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hoje from './pages/Hoje';
import Habitos from './pages/Habitos';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/cadastro' element={<Cadastro />}/>
            <Route path='/test' element={<Test />}/>
            <Route path='/hoje' element={<Hoje />} />
            <Route path='/habitos' element={<Habitos />}/>
          </Routes>      
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
