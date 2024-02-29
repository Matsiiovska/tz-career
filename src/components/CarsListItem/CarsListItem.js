import css from './CardItem.module.css';

export const CarsListItem = ({ car, index }) => {
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
     <li>
      <div className={css.ItemsCont}>
        <div className={css.ItemsContImg}>
<img className={css.Img} src={img} alt="cars"/>
          <svg className={css.Serdechko} width="16px" height="16px">
            <use href={`${symbol-defs}#icon-next-arrow`}></use>
          </svg>
        </div>
    </div>
  
  
  </li>;
    
  )
 
};
