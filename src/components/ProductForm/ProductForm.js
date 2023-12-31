import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = ({setCurrentColor, setCurrentSize, handleSubmit, currentColor, currentSize, sizes, colors}) => { 

    const formSizeData = {
        setCurrentSize,    
        currentSize,  
        sizes, 
    };
    const formColorData = {
        setCurrentColor,  
        currentColor,  
        colors, 
    };

    return (
        <form>
          <OptionSize {...formSizeData}></OptionSize>
          <OptionColor {...formColorData}></OptionColor>
          <Button action={handleSubmit} buttonName="summary"
            className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>    
    );
};

ProductForm.propTypes = { 
    setCurrentColor: PropTypes.func.isRequired,
    setCurrentSize: PropTypes.func.isRequired, 
    currentColor: PropTypes.string.isRequired,  
    currentSize: PropTypes.string.isRequired,  
    sizes: PropTypes.array.isRequired, 
    colors: PropTypes.array.isRequired,   
    handleSubmit: PropTypes.func.isRequired,  
  };

export default ProductForm;
