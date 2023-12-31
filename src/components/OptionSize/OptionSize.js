import styles from './OptionSize.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../Button/Button';

const OptionSize = ({setCurrentSize, currentSize, sizes}) => { 

    const changeSize = e => { 
        e.preventDefault();
        const chosenSize = e.target.name; 
        setCurrentSize(chosenSize);
      }    

    return (
    <div className={styles.sizes}>
        <h3 className={styles.optionLabel}>Sizes</h3>
        <ul className={styles.choices}>
        { sizes.map(size => <li key={size.name}>
            <Button action={changeSize} buttonName={size.name}
              className={clsx(size.name === currentSize && styles.active)}>
              {size.name}
            </Button>
          </li>)} 
        </ul>
    </div>    
    );
};

OptionSize.propTypes = { 
    setCurrentSize: PropTypes.func.isRequired,    
    currentSize: PropTypes.string.isRequired,    
    sizes: PropTypes.array.isRequired,
  };

export default OptionSize;