import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  const hStyle = { color: 'black' };
  return (
    <footer >
      <p style={hStyle}>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
