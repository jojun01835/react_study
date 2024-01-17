import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import InputI from "../../UI/InputI";

const MealItemFrom = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInput = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInput.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <InputI ref={amountInput} label="Amount" input={{ id: "amount", type: "number", min: "1", max: "5", step: "1", defaultValue: "1" }} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter the Amount</p>}
    </form>
  );
};

export default MealItemFrom;
