import React from 'react';
import "./Navbar.scss";

// const logo =  require("./../logo.png")

export default function Navbar() {
  const menu = ['Dashboard', 'Current', 'Complete', 'Log Out'];
  const menuLinks = ['/', '/search', '/', '/login'];
  const menuItems = menu.map((val, index)=>{
    const link = menuLinks[index];
    return(
      <div className="item">
        <a href={link}><h4>{val}</h4></a>
      </div>
    )
  });
  return (
    <div className="navbar">
      <img src="https://sdmny.hunter.cuny.edu/wp-content/uploads/2019/01/hunter-college-logo.png" className="logo" />
      <div className="nav-buttons">
        {menuItems}
      </div>
    </div>
  )
}