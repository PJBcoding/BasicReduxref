import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: "INCREMENT" })
  }
  const decrementHandler = () => {
    dispatch({ type: "DECREMENT" })
  }
  const incrementByVal = () => {
    dispatch({ type: "INCREASEBYVAL", value: 10 })
  }

  const toggleCounterHandler = () => {
    dispatch({ type: "togglecounter" })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementByVal}>Increment By 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
