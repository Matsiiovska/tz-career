import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={css.containerFut}>
        <div className={css.sectionFut}>
          <div className={css.par}>
            <p className={css.inlineInfo}>Address: st. Central, 12</p>
            <p className={css.inlineInfo}>Телефон: +123456789</p>
            <p className={css.inlineInfo}>Email: dovgalyukolya@gmil.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
