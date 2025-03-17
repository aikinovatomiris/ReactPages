import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <img
        className="header__logo"
        src="/img/logo.jpg"
        alt="shop logo"
        onClick={() => navigate("/")}
      />
      <nav className="nav">
        <a className="nav__item" href="#why-us">Главная</a>
        <a className="nav__item" href="#numbers">Каталог</a>
        <a className="nav__item" href="#reviews">Отзывы</a>
        <a className="nav__item" href="#how-to-find-us">О нас</a>
      </nav>
    </header>
  );
};

export default HeaderComponent;