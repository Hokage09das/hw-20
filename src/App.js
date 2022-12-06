import "./App.css";
import useCounter from "./components/hooks/useCounter";

function App() {
  const defaultState = 5;
  const maxNumber = 21;
  const minNumber = 3;
  const increaseNumber = 2;
  const decreaseNumber = 2;

  const { count, increaseCount, decreaseCount, resetHandler } = useCounter(
    defaultState,
    maxNumber,
    minNumber,
    increaseNumber,
    decreaseNumber,
  );
  return (
    <div className='App'>
      {count} <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
      <button onClick={resetHandler}>reset</button>
    </div>
  );
}

export default App;
