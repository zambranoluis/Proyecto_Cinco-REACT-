import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import NavBar from './Componentes/NavBar';
import Footer from './Componentes/Footer';

import Home from './Vistas/Home';
import Personajes from './Vistas/Personajes';
import AcercaDe from './Vistas/AcercaDe';
import Personaje from './Vistas/Personaje';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <NavBar />
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/personajes' element={<Personajes />} />
    <Route path='/acerca-de' element={<AcercaDe />} />
    <Route path='/personaje/:id' element={<Personaje/>}/>
  </Routes>
  <Footer/>
</BrowserRouter>
);


