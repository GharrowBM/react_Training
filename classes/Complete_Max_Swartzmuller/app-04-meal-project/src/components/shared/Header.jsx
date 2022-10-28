import classes from "./Header.module.scss";
import foodBanner from "../../assets/food_banner.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <div></div>
        <img src={foodBanner} alt="A tons of food" />
      </div>
    </>
  );
}

export default Header
