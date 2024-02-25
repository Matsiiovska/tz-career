import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={css.containerFut}>
        <div className={css.sectionFut}>
          <h3 className={css.zag}>Contacts</h3>
          <div className={css.par}>
            <p>Address: st. Central, 12</p>
            <p>Телефон: +123456789</p>
            <p>Email: dovgalyukolya@gmil.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
