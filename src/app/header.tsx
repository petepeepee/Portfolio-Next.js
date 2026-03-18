'use client';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

type HeaderProps = {
  children?: React.ReactNode;
};

export default function Header({ children }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="header">
      <h1>Portfolio</h1>
      <div className="navigation">
        <Hamburger toggled={isOpen} toggle={toggleMenu} />

        {isOpen && <div onClick={toggleMenu}>{children} </div>}
      </div>
    </header>
  );
}
