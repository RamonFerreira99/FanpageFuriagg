// src/app/matches/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const Matches = () => {
  return (
    <div>
      <Navbar />
      <h1>Partidas do FURIA Team</h1>
      <ul>
        <li>FURIA vs. Team A</li>
        <li>FURIA vs. Team B</li>
        <li>FURIA vs. Team C</li>
      </ul>
    </div>
  );
};

export default Matches;
