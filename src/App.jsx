import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import pag1 from './pages/pag1';
import pag2 from './pages/pag2';
import pag3 from './pages/pag3';
import pag4 from './pages/pag4';
import pag5 from './pages/pag5';


function App() {

  return (
    <div className="App">
      <Header setPaginaAtual={setPaginaAtual} />

      <main>
        {paginaAtual === 'home' && <Home setPaginaAtual={setPaginaAtual} />}
        {paginaAtual === 'pag1' && <Pag1 />}
        {paginaAtual === 'pag2' && <Pag2 />}
        {paginaAtual === 'pag3' && <Pag3 />}
        {paginaAtual === 'pag4' && <Pag4 />}
        {paginaAtual === 'pag5' && <Pag5 />}
      </main>

      <Footer />
    </div>
  );
}

export default App;