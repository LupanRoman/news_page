import React from 'react';
import Logo from './assets/logo.svg';
import Menu from './assets/icon-menu.svg';
import CloseMenu from './assets/icon-menu-close.svg';
import News from './News';
import Topics from './Topics';

const App = () => {
  const openMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active');
  };

  const closeMenu = () => {
    const menu = document.getElementById('menu');
    menu.classList.remove('active');
  };

  return (
    <>
      <div className="main md:pl-10 md:pr-10">
        <div className="nav h-nav flex items-center justify-between pl-5 pr-5 relative">
          <img src={Logo} alt="logo" />
          <img
            id="open"
            src={Menu}
            alt="menu-button"
            className="cursor-pointer md:hidden"
            onClick={openMenu}
          />
          <div
            id="menu"
            className="nav-links flex flex-col md:static items-center"
          >
            <img
              id="close"
              src={CloseMenu}
              alt="close menu button"
              height={30}
              width={30}
              className="flex ml-32 pt-5 cursor-pointer md:hidden"
              onClick={closeMenu}
            />
            <ul className="list flex flex-col md:flex-row gap-4 p-6 md:p-0 mt-16 md:mt-0">
              <li>Home</li>
              <li>New</li>
              <li>Popular</li>
              <li>Trending</li>
              <li>Categories</li>
            </ul>
          </div>
        </div>
        <div className="content">
        <News />
        <Topics />
        </div>
      </div>
    </>
  );
};

export default App;
