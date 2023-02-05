import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const baseUrl = "https://react-http-3a09d-default-rtdb.europe-west1.firebasedatabase.app/meals.json";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    const getMeals = async () => {
      try{
        const response = await axios.get(baseUrl);
        setMeals(response.data);
      } catch(err){
        setError(err.message);
      }
    }
    setLoading(true);
    getMeals();
    setLoading(false);
  },[]);
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  if (loading){
    return <p>fetching meals</p>
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
        {error !== '' && <p>{error}</p>}
      </Card>
    </section>
  );
};

export default AvailableMeals;
