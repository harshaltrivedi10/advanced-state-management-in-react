import React, { useState, useEffect, useRef } from 'react';

// const getStateFromLocalStorage = () => {
//   const storage = localStorage.getItem('counterState');
//   console.log(storage);
//   if (storage) return +storage;
//   return 0;
// };

// const useLocalStorage = (initialState, key) => {
//   const get = () => {
//     const storage = localStorage.getItem(key);
//     if (storage) return storage;
//     return initialState;
//   };

//   const [val, setVal] = useState(get());

//   useEffect(() => {
//     localStorage.setItem(key, val);
//   }, [val]);

//   return [val, setVal];
// };

// const storeStateInLocalStorage = (count) => {
//   localStorage.setItem('counterState', +count);
// };

const Counter = ({ max, step }) => {
  const [count, setCount] = useState(0, 'counter');

  const countRef = useRef();

  let message = '';
  if (countRef.current < count) message = 'Higher';
  if (countRef.current > count) message = 'Lower';

  countRef.current = count;

  // const increment = () => setCount(count + 1);

  const increment = () => setCount((c) => c + 1);

  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useEffect(() => {
    const id = setInterval(() => {
      console.log(`Count: ${count}`);
    }, 3000);

    return () => clearInterval(id);
  }, [count]);

  return (
    <div className="Counter">
      <p>{message}</p>
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
