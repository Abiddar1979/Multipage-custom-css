import { headers } from 'next/headers';
import React from 'react';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">RC Traxx Cars World</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/rc-cars">RC Cars</Link>
        <Link href="/contact">Contact</Link>
        <FaShoppingCart style={{ fontSize: '20px' }} />
      </nav>
    </header>
  );
}

export default Header;
