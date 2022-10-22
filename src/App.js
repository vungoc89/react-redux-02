import logo from './logo.svg';
import './App.css';
// import { connect } from "react-redux";
// import {
//   increaseCounter,
//   decreaseCounter,
// } from "./action/actions";

// import {useSelector, useDispatch} from 'react-redux'; 
// import {useEffect} from 'react';
// import axios from 'axios';
import Home from './components/Home';
import { useDispatch, useSelector } from 'react-redux';
import {increment, decrement} from './redux/slices/counterSlice';

function App(props) {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value)
  return (
    <div className='App' >
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Hello world with React Redux-toolkit</h1>

        <div className='btn-actions'>
          <button onClick={()=>dispatch(increment())} >Decrease</button>
          <button onClick={()=>dispatch(decrement())} >Increase</button>

        </div>
        <br/>
        <div>Count = {count}</div>
      </header>
    </div>
  );
}

export default App;
