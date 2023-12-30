import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const startPrice = getPrice(props.basePrice, props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(startPrice);

  function getPrice(price, size) {
    const addition = props.sizes.find((el) => el.name === size);
    const totalPrice = price + addition.additionalPrice;
    return totalPrice;
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Podsumowanie:
    Name: ${props.title}
    Price: ${currentPrice}$
    Color: ${currentColor}
    Size: ${currentSize}`);
  }

  const formData = {
    setCurrentColor: setCurrentColor, 
    setCurrentSize: setCurrentSize,
    setCurrentPrice: setCurrentPrice, 
    handleSubmit: handleSubmit,
    currentColor: currentColor,  
    currentSize: currentSize, 
    currentPrice: currentPrice, 
    sizes: props.sizes, 
    colors: props.colors, 
    basePrice: props.basePrice,
    getPrice: getPrice,
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage title={props.title} name={props.name} currentColor={currentColor}></ProductImage>
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <ProductForm {...formData}></ProductForm>
      </div>
    </article>
  )
};

Product.propTypes = { 
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;