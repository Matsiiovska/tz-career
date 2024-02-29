import css from './CarsListItem.module.css';
import sprite from '../../images/sprite/symbol-defs.svg';
//import { useDispatch } from 'react-redux';

export const CarsListItem = ({ car }) => {
  //const dispatch = useDispatch();

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
  const cityCountry = address?.split(', ').slice(-2); // вирізаємо з адреси два останніх елементи

  return (
    <li>
      <div className={css.ItemsCont}>
        <div className={css.ItemsContImg}>
          <img className={css.Img} src={img} alt="cars" />
          <svg className={css.Serdechko} width="16px" height="16px">
            <use href={`${sprite}`}></use>
          </svg>
        </div>
        <div className={css.onRad}>
          <span className={css.onSpan}>{make}</span>
          <span className={css.onSpan}>{model}</span>
          <span className={css.onSpan}>{year}</span>
          <span className={css.onSpan}>{rentalPrice}</span>
        </div>
        <div className={css.twoRad}>
          <span className={css.onSpan}>{cityCountry[0]}</span>
          <span className={css.onSpan}>{cityCountry[1]}</span>
          <span className={css.onSpan}>{rentalCompany}</span>
          <span className={css.onSpan}>Premium</span>
        </div>

        <div className={css.threeRad}>
          <span className={css.onSpan}>{type}</span>
          <span className={css.onSpan}>{make}</span>
          <span className={css.onSpan}>{id}</span>
          <span className={css.onSpan}>{functionalities[0]}</span>
        </div>
      </div>
      <button type="button" className={css.Button}>
        Learn more
      </button>
    </li>
  );
};
export default CarsListItem;
