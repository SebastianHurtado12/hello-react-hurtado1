import React from 'react';

const Header = ({ title }) => {
  return (
    <nav className="justify-content-center navbar navbar-expand-lg p-3 mb-4 bg-primary  text-white font-weight-bold">
      <span className="navbar-brand " href="/"><h3>{title}</h3></span>
    </nav>
  );
};


export default Header;
