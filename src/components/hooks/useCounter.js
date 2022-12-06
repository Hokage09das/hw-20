import { useState } from "react";

const useCounter = (
  defaultState = 0,
  maxNumber = 0,
  minNumber = 0,
  increaseNumer = 1,
  decreaseNumber = 1,
) => {
  const [count, setCount] = useState(defaultState);
  const increaseCount = () => {
    if (maxNumber === 0 || (count < maxNumber && count)) {
      setCount((prevState) => prevState + increaseNumer);
    }
    if (count >= maxNumber) {
      alert("sorry reached number the maximum number");
    }
  };
  const decreaseCount = () => {
    if (count !== minNumber) {
      setCount((prevState) => prevState - decreaseNumber);
    }
    if (count <= minNumber) {
      alert("sorry reached the minimum number");
    }
  };
  const resetHandler = () => {
    setCount(defaultState);
  };

  return { count, increaseCount, decreaseCount, resetHandler };
};

export default useCounter;
