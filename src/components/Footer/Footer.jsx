import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={css.containerFut}>
        <div className={css.sectionFut}>
          <h3>Контакти</h3>
          <p>Адреса: вул. Прикладна, 123</p>
          <p>Телефон: +123456789</p>
          <p>Email: info@example.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
