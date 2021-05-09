import React from 'react';
import './App.css';
import {connect} from "react-redux"
import {increaseCounter, decreaseCounter} from "./redux/Counter/counter.actions"
//import { DECREMENT } from './redux/Counter/counter.types';



function App(props: any) {
  return (
    <div className="App">
      <div className="input"><input type="text" /></div>
   <div> Count: {props.count}</div>
   <button onClick={props.increment }>Increment</button>
   <button onClick={props.decrement}>Decrement</button>
    </div>
  );
}

// how to get data from the redux into our props
function mapStateToProps(state: any){
  return {
    count: state.counter.count
  }
}

// how ot get data from the redux into our props
function mapDispatchToProps(dispatch:any){
  return {
    increment: () => (dispatch(increaseCounter())),
  /*   decrement: () => (dispatch({
  type: DECREMENT  })) */
decrement: () => (dispatch(decreaseCounter())),
  
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
