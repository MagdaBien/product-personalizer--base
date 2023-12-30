import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = (props) => { 

    const formSizeData = {
        setCurrentSize: props.setCurrentSize,  
        setCurrentPrice: props.setCurrentPrice,  
        currentSize: props.currentSize,  
        getPrice: props.getPrice,  
        sizes: props.sizes, 
        basePrice: props.basePrice, 
    };
    const formColorData = {
        setCurrentColor: props.setCurrentColor,  
        currentColor: props.currentColor,  
        colors: props.colors, 
    };

    return (
        <form>
          <OptionSize {...formSizeData}></OptionSize>
          <OptionColor {...formColorData}></OptionColor>
          <Button action={props.handleSubmit} buttonName="summary"
            className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>    
    );
};

ProductForm.propTypes = { 
    setCurrentColor: PropTypes.func.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    setCurrentPrice: PropTypes.func.isRequired, 
    handleSubmit: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired,  
    currentSize: PropTypes.string.isRequired, 
    currentPrice: PropTypes.number.isRequired, 
    sizes: PropTypes.array.isRequired, 
    colors: PropTypes.array.isRequired,  
    basePrice: PropTypes.number.isRequired, 
    getPrice: PropTypes.func.isRequired,    
  };

export default ProductForm;
