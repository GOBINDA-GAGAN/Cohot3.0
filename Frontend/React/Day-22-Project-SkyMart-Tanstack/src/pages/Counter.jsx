import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByValue,
} from "../features/counterSlices";

const Counter = () => {
  let dispatch = useDispatch();
  const data = useSelector((store) => store.counter.count);
  const [inputValue, setInputValue] = useState(0);

  console.log(data);

  return (
    <div>
      LoginPage
      <h1>Count is {data}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="p-3 border bg-green-400"
      >
        increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className=" ml-4 p-3 border bg-red-400"
      >
        decrement
      </button>
      <div className=" mt-4">
        <input
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
          placeholder="enter the number "
          className=" ml-4 p-2  border"
        />
        <button
          onClick={() => dispatch(incrementByValue(inputValue))}
          className=" ml-4 p-2 border bg-green-400"
        >
          increment
        </button>
      </div>
    </div>
  );
};

export default Counter;
