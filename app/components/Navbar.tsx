// src/app/components/Navbar.tsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Link from 'next/link'; // Importar Link do Next.js
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>FURIA Team</div>
      <FaBars onClick={handleMenuToggle} style={{ cursor: 'pointer', fontSize: '24px' }} />
      {isOpen && (
        <ul className={styles.menu}>
          <li><Link href="../src/index.html">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/matches">Matches</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
