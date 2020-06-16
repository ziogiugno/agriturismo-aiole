import React from "react";

const Footer = () => {

    return (
<footer class="aiole-footer mdl-mega-footer">
<div class="mdl-mega-footer__top-section">
  PARTNERS:
  <a class="it" href="http://www.montalcinoitaly.com" target="_blank">
  <img width="120" height="45" src="images/cesira.gif">
  </a>
  <a class="it" href="http://www.gualdodelre.com" target="_blank">
  <img width="120" height="35" src="images/gualdodelre.gif">
  </a>
  <a class="it" href="http://www.agriturismolaleggenda.it/" target="_blank">
  <img width="120" height="21" src="images/laleggenda.jpg">
  </a>
</div>
<div class="mdl-mega-footer__bottom-section">
  <div class="mdl-mega-footer__left-section">
    {{lastupdate}}: {{ lastmod|date('d/m/Y') }}
  </div>
  <div class="mdl-mega-footer__right-section"> Copyright &copy; 2016   Azienda Agricola Aiole</div>
</div>
</footer>
);
};

export default Footer;
