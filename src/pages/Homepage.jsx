import React, { useReducer } from "react";
import { useState, useEffect } from "react";
import counterReducer from "../store/countReducer";

function HomePage() {
  const [state, dispatch] = useReducer(counterReducer, {
    count: 0,
    showCount: true,
  });
  // const [count, setCount] = useState(0);
  //    count = 0
  //    0+ 1=1
  //    1+1=2

  //   useEffect(callback,dependencyList);

  // onload
  //   useEffect(() => {
  //     console.log("This is effect");
  //   },[count]);

  function increaseCountHandler() {
    dispatch({ type: "increaseBy", value: 10 });
  }

  function decreaseCountHandler() {
    dispatch({ type: "decrease" });
  }

  function toggleCountHandler() {
    dispatch({ type: "toggleShowCount" });
  }

  return (
    <div className="card col-6 mx-auto text-center mt-5">
      <div className="card-body">
        {state.showCount && <p>{state.count}</p>}
        <button className="btn btn-info" onClick={increaseCountHandler}>
          Increase count
        </button>
      </div>
    </div>
  );
}

export default HomePage;
