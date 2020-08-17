import React from "react";

const Footer = (Footer) => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <p>&Copy; Robert Purc {date}</p>
    </footer>
  );
};

export default Footer;
