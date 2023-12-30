import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../Button/Button';

const OptionSize = (props) => { 

    const changeSize = e => { 
        e.preventDefault();
        const chosenSize = e.target.name; 
        props.setCurrentSize(chosenSize);
        props.setCurrentPrice(props.getPrice(props.basePrice, chosenSize));
      }    

    return (
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
        { props.sizes.map(size => <li key={size.name}>
            <Button action={changeSize} buttonName={size.name}
              className={clsx(size.name === props.currentSize && styles.active)}>
              {size.name}
            </Button>
          </li>)} 
        </ul>
    </div>    
    );
    
};

OptionSize.propTypes = { 
    setCurrentSize: PropTypes.func.isRequired,  
    setCurrentPrice: PropTypes.func.isRequired,  
    currentSize: PropTypes.string.isRequired,   
    getPrice: PropTypes.func.isRequired,  
    sizes: PropTypes.array.isRequired,
    basePrice: PropTypes.number.isRequired, 
  };

export default OptionSize;