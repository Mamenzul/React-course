import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem";
import DUMMY_MEALS from "./dummy-meals";
const AvailableMeals = () => {
  const mealsToMap = DUMMY_MEALS.map((el) => {
    return (
      <MealItem
        id={el.id}
        key={el.id}
        description={el.description}
        name={el.name}
        price={el.price}
      />
    );
  });
  return (
    <Card>
      <div className={classes.meals}>
        <ul>{mealsToMap}</ul>
      </div>
    </Card>
  );
};

export default AvailableMeals;
