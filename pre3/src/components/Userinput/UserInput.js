import React, { useState } from "react";
import styles from "./UserInput.module.css";
const UserInput = (props) => {
  const initialUserInput = {
    "current-savings": 10000, // 저축금액
    "yearly-contribution": 1200, // 1년 저축금액 한달에 100$ 씩 저축
    "expected-return": 7, // 금리
    duration: 10, //  저축기간
  };

  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();

    props.onCalculate(userInput);
  };

  const resetHandeler = () => {
    setUserInput(initialUserInput);
  };

  const ChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: +value,
      };
    });
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input onChange={(e) => ChangeHandler("current-savings", e.target.value)} value={userInput["current-savings"]} type="number" id="current-savings" />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(e) => ChangeHandler("yearly-contribution", e.target.value)}
            value={userInput["yearly-contribution"]}
            type="number"
            id="yearly-contribution"
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">Expected Interest (%, per year)</label>
          <input onChange={(e) => ChangeHandler("expected-return", e.target.value)} value={userInput["expected-return"]} type="number" id="expected-return" />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input onChange={(e) => ChangeHandler("duration", e.target.value)} value={userInput["duration"]} type="number" id="duration" />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={resetHandeler}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  );
};

export default UserInput;
