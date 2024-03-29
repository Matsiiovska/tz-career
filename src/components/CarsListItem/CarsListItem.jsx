import css from './CarsListItem.module.css';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/slice';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';

export const CarsListItem = ({ car }) => {
  const dispatch = useDispatch();

  console.log(car);
  const [modalOpen, setModalOpen] = useState(false);

  const isFavorite = useSelector(state =>
    state.cars.favoriteCars.includes(car ? car.id : 0)
  );

  if (!car) return <li className={css.Li}></li>;
  //const [isClicked, setIsClicked] = useState(isFavorite); // стан для відстеження кліку на сердечко

  const handleClickSerdechko = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(car.id));
    } else {
      dispatch(addToFavorites(car.id));
    }
    /* setIsClicked(prevState => !prevState);*/
  };

  const handleLearnMore = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden'; //заборонити прокручування тіла документа
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  const {
    id,
    make,
    model,
    year,
    img,
    rentalPrice,
    rentalCompany,
    type,
    functionalities,
    address,
  } = car;
  const cityCountry = address?.split(', ').slice(-2);
  return (
    <li className={css.Li}>
      <div className={css.ItemsCont}>
        <div className={css.WidCar}>
          {' '}
          <div className={css.ItemsContImg}>
            <img className={css.Img} src={img} alt="cars" />
            <svg
              className={css.Serdechko}
              onClick={handleClickSerdechko}
              width="18px"
              height="18px"
            >
              {isFavorite ? (
                <use href={`${sprite}#icon-heart-1`}></use>
              ) : (
                <use href={`${sprite}#icon-heart-2`}></use>
              )}
            </svg>
          </div>
          <div className={css.Text}>
            <div className={css.onRad}>
              <div className={css.onRost}>
                <span className={css.onSpan}>{make}</span>
                <span className={css.onSpanModel}>{model + ','}</span>
                <span className={css.onSpan}>{year}</span>
              </div>

              <span className={css.onSpan}>{rentalPrice}</span>
            </div>
            <div className={css.Rad}>
              <span className={css.onSpan}>{cityCountry[0]}</span>
              <span className={css.onSpan}>{cityCountry[1]}</span>
              <span className={css.onSpan}>{rentalCompany}</span>
              <span className={css.onSpan}>Premium</span>
            </div>

            <div className={css.Rad}>
              <span className={css.onSpan}>{type}</span>
              <span className={css.onSpan}>{make}</span>
              <span className={css.onSpan}>{id}</span>
              <span className={css.onSpan}>{functionalities[0]}</span>
            </div>
          </div>
        </div>

        <button type="button" className={css.Button} onClick={handleLearnMore}>
          Learn more
        </button>
        {modalOpen && <Modal closeModal={closeModal} car={car} />}
      </div>
    </li>
  );
};
export default CarsListItem;
