import React from 'react';

interface HeaderProps {
  selectedGenre: {
    title: string
  }
}

function Header({ selectedGenre }:HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
    </header>
  )
}

export default Header;