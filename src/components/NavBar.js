import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const sign = '#';

  return <nav>{ 
    links.map((link) => {
      return(
      <a key={link} href={sign+link}>{link}</a>
    )})    
    } </nav>;
  }

export default NavBar;
