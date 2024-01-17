import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoding, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    setIsLoading(true);
    const fetchMeals = async () => {
      const res = await fetch("https://react-http-46a30-default-rtdb.firebaseio.com/meals.json");

      if (!res.ok) {
        throw new Error("Something went Wrong!");
      }

      const resdata = await res.json();

      const loadedMeals = [];

      for (const key in resdata) {
        loadedMeals.push({
          id: key,
          name: resdata[key].name,
          description: resdata[key].description,
          price: resdata[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoding) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loding...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
