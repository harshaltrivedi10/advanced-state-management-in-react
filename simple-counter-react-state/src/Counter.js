import React, { useState, useEffect } from 'react';

// const getStateFromLocalStorage = () => {
//   const storage = localStorage.getItem('counterState');
//   console.log(storage);
//   if (storage) return +storage;
//   return 0;
// };

const useLocalStorage = (initialState, key) => {
  const get = () => {
    const storage = localStorage.getItem(key);
    if (storage) return storage;
    return initialState;
  };

  const [val, setVal] = useState(get());

  useEffect(() => {
    localStorage.setItem(key, val);
  }, [val]);

  return [val, setVal];
};

// const storeStateInLocalStorage = (count) => {
//   localStorage.setItem('counterState', +count);
// };

const Counter = ({ max, step }) => {
  const [count, setCount] = useLocalStorage(0, 'counter');

  // const increment = () => setCount(count + 1);

  const increment = () =>
    setCount((c) => {
      if (c >= max) return c;
      return c + step;
    });

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  // useEffect(() => {
  //   document.title = count;
  //   storeStateInLocalStorage(count);
  // }, [count]);

  return (
    <div className="Counter">
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </section>
    </div>
  );
};

export default Counter;
