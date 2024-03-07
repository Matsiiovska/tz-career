import React from 'react';
import css from './Modal.module.css';
import sprite from '../../images/symbol-defs.svg';

export const Modal = ({ closeModal, car }) => {
  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    type,
    functionalities,
    address,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    mileage,
  } = car;
  const cityCountry = address?.split(', ').slice(-2);
  const rentalConditionsArray = car.rentalConditions.split('\n');

  // Отримуємо мінімальний вік
  const minimumAge = rentalConditionsArray[0].split(': ')[1];

  // Отримуємо умови для водійського посвідчення
  const driverLicenseConditions = rentalConditionsArray[1];

  // Отримуємо умови щодо страхового депозиту
  const securityDepositConditions = rentalConditionsArray[2];

  const formattedMileage = Number.parseFloat(mileage)
    .toLocaleString()
    .replace(/\s/g, ',');

  // Розбиваємо суму і символ долара
  const parts = rentalPrice.split('$');
  // Формуємо нову суму зі зміненим порядком
  const newRentalPrice = `${parts[1]}$${parts[0]}`;

  return (
    <div
      className={`${css.modalContainer} ${css.modalOverlay}`}
      onClick={closeModal}
    >
      <div className={css.modalContent} onClick={e => e.stopPropagation()}>
        <svg
          className={css.close}
          onClick={closeModal}
          width="18px"
          height="18px"
        >
          <use href={`${sprite}#icon-x`}></use>
        </svg>{' '}
        <img className={css.Img} src={img} alt="cars" />
        <div>
          <h2 className={css.ZagMod}>
            {make} {model}
          </h2>
          <div className={css.Rad}>
            <span className={css.onSpan}>{cityCountry[0]}</span>
            <span className={css.onSpan}>{cityCountry[1]}</span>
            <span className={css.onSpan}>id: {id}</span>
            <span className={css.onSpan}>Year: {year}</span>
            <span className={css.onSpan}>Type: {type}</span>
          </div>
          <div className={`${css.Rad} ${css.vidFuel}`}>
            <span className={`${css.onSpan} ${css.Vids}`}>
              FuelConsumption: {fuelConsumption}
            </span>
            <span className={css.onSpan}>engineSize: {engineSize}</span>
          </div>
          <p className={css.Desc}>{description}</p>
          <h3 className={css.zagAccessories}>
            Accessories and functionalities:
          </h3>
          <div className={css.vidAcc}>
            <div className={css.Rad}>
              <span className={`${css.onSpan} ${css.Vids}`}>
                {accessories[0]}
              </span>
              <span className={css.onSpan}>{accessories[1]}</span>
              <span className={css.onSpan}>{functionalities[0]}</span>
            </div>
            <div className={css.Rad}>
              <span className={css.onSpan}>{accessories[2]}</span>
              <span className={css.onSpan}>{functionalities[1]}</span>
              <span className={css.onSpan}>{functionalities[2]}</span>
            </div>
          </div>

          <h3 className={css.ZagRent}>Rental Conditions: </h3>
          <div className={css.Rental}>
            <span className={css.Znach}>
              <span className={css.Minimum}>Minimum age:</span> {minimumAge}
            </span>
            <span className={css.Minimum}>{driverLicenseConditions}</span>
          </div>
          <div className={css.Marg}>
            <span className={css.Minimum}>{securityDepositConditions}</span>

            <span className={css.Znach}>
              <span className={css.Minimum}>Mileage:</span> {formattedMileage}
            </span>
            <span className={css.Znach}>
              <span className={css.Minimum}>Price: </span> {newRentalPrice}
            </span>
          </div>
          <button type="button" className={css.RentalCarButt}>
            Rental car
          </button>
        </div>
      </div>
    </div>
  );
};
