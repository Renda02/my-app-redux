import React, { useState } from "react";
import "./App.css";
import { connect } from "react-redux";

function App(props: any) {
  const [inputValue, setInputValue] = useState(0);

  return (
    <div className="App"><input
          type="number"
          value={inputValue}
          onChange={(e) => {
            setInputValue(parseFloat(e.target.value));
          }}
        />
      <div className="input">
        
        <button
          onClick={() => {
            props.addValue(inputValue);
            setInputValue(0);
          }}
        >
          Add
        </button>
        <button
          onClick={() => {
            props.minusValue(inputValue);
            setInputValue(0);
          }}
        >
          Minus
        </button>
        <button
        onClick={()=>{
          props.multiplyValue(inputValue);
          setInputValue(0);
        }}>Multiply</button>
        <button
        onClick={()=>{
          props.divideValue(inputValue);
          setInputValue(0);
        }}
        >Divide</button>
      </div>
      <div> Count: {props.count}</div>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

// how to get data from the redux into our props
function mapStateToProps(state: any) {
  return {
    count: state.count,
  };
}

// how ot get data from the redux into our props
function mapDispatchToProps(dispatch: any) {
  return {
    increment: () =>
      dispatch({
        type: "INCREMENT",
      }),
    decrement: () =>
      dispatch({
        type: "DECREMENT",
      }),
    addValue: (value: number) =>
      dispatch({
        type: "ADD_VALUE",
        payload: value,
      }),
    minusValue: (value: number) =>
      dispatch({
        type: "MINUS_VALUE",
        payload: value,
      }),
      divideValue: (value:number)=>
      dispatch({
        type: 'DIVIDE_VALUE',
        payload:value,
      }),
      multiplyValue: (value:number)=>
      dispatch({
        type: 'MULTIPLY_VALUE',
        payload:value,
      })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// TODOS
// Add a new button to divide the state by a value
// Add a new button to multipy the state by a value

// Adding a new state in the store
// Add a new redux state that is an array
// In the initial moment is an empty array
// Add a button that can add a bnumber into the array