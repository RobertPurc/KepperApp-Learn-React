import React from "react";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>&Copy; Robert Purc {date}</p>
    </footer>
  );
}

export default Footer;
