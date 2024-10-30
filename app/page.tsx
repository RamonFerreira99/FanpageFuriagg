// src/app/page.tsx
import React from 'react';
import Navbar from './components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Bem-vindo ao time FURIA!</h1>
      <p>Explore nossas partidas e saiba mais sobre o time.</p>
    </div>
  );
};

export default Home;
