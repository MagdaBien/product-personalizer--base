import styles from './Product.module.scss';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useMemo } from 'react';

const Product = ({name, title, basePrice, sizes, colors}) => {
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const price = useMemo(
    ()=>{
      const addition = sizes.find((el) => el.name === currentSize);
      const totalPrice = basePrice + addition.additionalPrice;
      console.log("getPrice: ", title, basePrice, addition.additionalPrice, currentSize, totalPrice);
      return totalPrice}, [currentSize]
    );


  const handleSubmit = e => {
    e.preventDefault();
    console.log(`Podsumowanie:
    Name: ${title}
    Price: ${price}$
    Color: ${currentColor}
    Size: ${currentSize}`);
  }

  const formData = {
    setCurrentColor, 
    setCurrentSize, 
    currentColor,  
    currentSize, 
    sizes, 
    colors, 
    handleSubmit,    
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <ProductImage title={title} name={name} currentColor={currentColor}></ProductImage>
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {price}$</span>
        </header>
        <ProductForm {...formData}></ProductForm>
      </div>
    </article>
  )
};

Product.propTypes = { 
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
  sizes: PropTypes.array.isRequired,
};

export default Product;