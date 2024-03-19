import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import toast from 'react-hot-toast';
import { setFilters } from '../../redux/slice';
import css from './Filters.module.css';
import { makeArray } from 'func/makeArrey';

import sprite from '../../images/sprite.svg';
import { priceArray } from 'func/priceArray';

const initOpen = { brand: false, price: false };

export const Filters = () => {
  const {
    brand: existBrand,
    price: existPrice,
    mileageFrom: existFrom,
    mileageTo: existTo,
  } = useSelector(selectFilter) || {};

  const [brand, setBrand] = useState(existBrand || '');
  const [price, setPrice] = useState(existPrice || '');
  const [mileageFrom, setMileageFrom] = useState(existFrom || '');
  const [mileageTo, setMileageTo] = useState(existTo || '');
  const [isOpen, setOpen] = useState(initOpen);

  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const dispatch = useDispatch();

  //обробка відкритого спадного меню

  const handleOpen = type => {
    setOpen(prev => ({ ...prev, [type]: !prev[type] }));

    // Встановлюємо відкриття відповідного списку
    if (type === 'brand') {
      setIsBrandOpen(prev => !prev);
      setIsPriceOpen(false); // Закриваємо інший список, якщо він відкритий
    } else if (type === 'price') {
      setIsPriceOpen(prev => !prev);
      setIsBrandOpen(false); // Закриваємо інший список, якщо він відкритий
    }
  };

  //закриття випадаючого списку при кліку на будь яку область документа

  //wrong value in mileage
  const handleWrongValue = (value, form) => {
    if (form === 'mileageFrom') {
      setMileageFrom(value);
    } else {
      setMileageTo(value);
    }

    setTimeout(() => {
      toast.error('"From" should be less or equal "To"', {
        position: 'top-center',
      });
    }, 1000);
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'brand':
        setBrand(value);
        break;

      case 'price':
        setPrice(value.toString());
        break;

      case 'mileageFrom':
        mileageTo !== '' && Number(mileageTo) <= value
          ? handleWrongValue(mileageTo, 'mileageFrom')
          : setMileageFrom(value.toString());
        break;

      case 'mileageTo':
        setMileageTo(value.toString());
        break;

      default:
        console.log('looks like you use inputs wrong');
    }
  };
  const handleBrandClick = event => {
    const value = event.target.textContent;
    setBrand(value);
    setIsBrandOpen(false); // Закриваємо список після вибору елемента
  };
  //click on price
  const handlePriceClick = e => {
    const value = e.target.textContent;
    setPrice(value.toString());
    setIsPriceOpen(false); // Закриваємо список після вибору елемента
  };

  //submit
  const handleSearchClick = () => {
    dispatch(setFilters({ brand, price, mileageFrom, mileageTo }));
  };

  //reset
  const handleReset = e => {
    e.preventDefault();

    setBrand('');
    setPrice('');
    setMileageFrom('');
    setMileageTo('');

    dispatch(
      setFilters({ brand: '', price: '', mileageFrom: '', mileageTo: '' })
    );
  };

  const handleMileage = () => {
    mileageFrom !== '' &&
      Number(mileageFrom) > mileageTo &&
      handleWrongValue(mileageFrom);
  };

  const formatNumber = number => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <div className={css.FiltCont}>
      <div className={css.SectionContFil}>
        <label className={css.SelectContLab}>Car brand</label>
        <div className={css.inputSvgCont}>
          <svg
            className={css.Svg}
            onClick={() => handleOpen('brand')}
            data-type="brand"
            width="18px"
            height="18px"
          >
            {isOpen.brand ? (
              <use href={`${sprite}#icon-chevron-down`}></use>
            ) : (
              <use href={`${sprite}#icon-chevron-down-1`}></use>
            )}
          </svg>
          <input
            type="text"
            value={brand}
            name="brand"
            onChange={handleChange}
            onFocus={() => setIsBrandOpen(true)}
            onBlur={() => setIsBrandOpen(false)}
            className={css.Input}
            placeholder="Enter the text"
          />
          {isBrandOpen && (
            <div
              className={`${css.optionList} ${
                isBrandOpen ? css.optionListOpen : css.optionListClose
              }`}
              onMouseDown={handleBrandClick}
            >
              <ul className={css.BrandUl}>
                {makeArray.map((brand, index) => (
                  <li className={css.Brand} key={index}>
                    {brand}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={css.SectionContFil}>
        <label className={css.SelectContLab}>Price/ 1 hour</label>
        <div className={css.inputSvgCont}>
          <svg
            className={css.Svg}
            onClick={() => handleOpen('price')}
            data-type="price"
            width="18px"
            height="18px"
          >
            {isOpen.price ? (
              <use href={`${sprite}#icon-chevron-down`}></use>
            ) : (
              <use href={`${sprite}#icon-chevron-down-1`}></use>
            )}
          </svg>
          <input
            type="text"
            value={price}
            name="price"
            onChange={handleChange}
            onFocus={() => setIsPriceOpen(true)}
            onBlur={() => setIsPriceOpen(false)}
            className={css.inputPrice}
            placeholder="To $"
          />
          {isPriceOpen && (
            <div
              className={`${css.optionList} ${
                isPriceOpen ? css.optionListOpenPrice : css.optionListClosePrice
              } ${css.dropdownContainer}`}
              onMouseDown={handlePriceClick}
            >
              <ul className={css.priceUl}>
                {priceArray.map((price, index) => (
                  <li className={css.Brand} key={index}>
                    {price}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className={css.MileageFromTo}>
        <label htmlFor="from-to" className={css.LabelMileage}>
          Car mileage / km
        </label>
        <div className={css.inputContMileage}>
          <div className={css.spanInput}>
            <span className={css.textMileage}>From:</span>
            <input
              type="text"
              name="mileageFrom"
              value={formatNumber(mileageFrom)}
              className={css.From}
              onChange={handleChange}
            />
          </div>
          <div className={css.spanInput}>
            <span className={css.textMileage}>To:</span>
            <input
              type="text"
              name="mileageTo"
              value={formatNumber(mileageTo)}
              className={css.To}
              onChange={handleChange}
              onBlur={handleMileage}
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className={css.ButtonSearch}
        onClick={handleSearchClick}
      >
        Search
      </button>
      <button type="button" className={css.ButtonSearch} onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Filters;
