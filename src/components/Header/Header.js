import classes from "./Header.module.css";
import meals from './meals.jpg';
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <>
    <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton cartButtonClick={props.cartButtonClick}></HeaderCartButton>
    </header>
    <div className={classes['main-image']}>
        <img src={meals} alt='meals'></img>
    </div>
    </>
  );
};

export default Header;
