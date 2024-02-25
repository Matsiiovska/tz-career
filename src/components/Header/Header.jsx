import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Logo from '../../images/favicon.png';
const Header = () => {
  return (
    <section className={css.sectionHead}>
      <div className={css.contHead}>
        <NavLink to="/" className={css.conImPar}>
          <img src={Logo} alt="Logo" className={css.logo} />
          <p className={css.rentalCar}>Car rental</p>
        </NavLink>
        <nav className={css.nav}>
          <NavLink className={css.navLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.navLink} to="/catalog">
            Catalog
          </NavLink>
          <NavLink className={css.navLink} to="/favorites">
            Favorites
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Header;
