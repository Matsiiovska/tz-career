import React from 'react';
import css from './HomePage.module.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/catalog');
  };
  return (
    <div className={css.contHome}>
      <div className={css.sectionHome}>
        <div className={css.welcomHome}>
          <p className={css.abzac}>
            Welcome to our website! We are delighted to introduce you to our car
            rental services in Ukraine.
          </p>
          <button type="button" className={css.But} onClick={handleClick}>
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
