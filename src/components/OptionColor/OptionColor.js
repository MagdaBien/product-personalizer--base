import styles from './OptionColor.module.scss';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '../Button/Button';

const OptionColorColor = (props) => { 

    const prepareColorClassName = color => {
        return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
      }  
      
      const changeColor = e => {
        e.preventDefault();
        props.setCurrentColor(e.target.name)
      }      

    return (
    <div className={styles.colors}>
        <h3 className={styles.optionLabel}>Colors</h3>
        <ul className={styles.choices}>
        { props.colors.map(item => <li key={item}>
            <Button action={changeColor} buttonName={item} 
              className={clsx(prepareColorClassName(item), item === props.currentColor && styles.active)}>
            </Button>                  
          </li>)} 
        </ul>
    </div>
    );
    
};

OptionColorColor.propTypes = { 
    setCurrentColor: PropTypes.func.isRequired,
    currentColor: PropTypes.string.isRequired, 
    colors: PropTypes.array.isRequired, 
  };

export default OptionColorColor;