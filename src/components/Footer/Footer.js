import React from "react";
import './Footer.css'

function Footer(){

  const currentYear = new Date().getFullYear()
  return(
<footer className="footer">
<div className="footer__content">
  <p className="footer__text">
            &copy; {currentYear} Devin Jaggernauth
          </p>
</div>
</footer>
  )
}
export default Footer