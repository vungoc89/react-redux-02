import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "./action/actions";

import {useSelector, useDispatch} from 'react-redux'; 

import Home from './components/Home';
function App(props) {

  const newCount = useSelector(
    (state) => {return state.counter.count}
    ); 
    const dispatch = useDispatch(); 

  const handleIncrease = () => {
    // dispatch action
    // props.increaseCounter1();
    dispatch(increaseCounter()); 
  }

  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React and Hoi Dan IT!</h1>
          {/* <div>Count: {props.count}</div> */}
          <div>Count: {newCount}</div>

          {/* <button onClick={() => props.increaseCounter1()}>Increase Count</button> */}
          <button onClick={() => handleIncrease()}>Increase Count</button>

          {/* <button onClick={() => props.decreaseCounter()}>Decrease Count</button> */}
          <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
      </header>
    </div>
    // <>
    //   <Home/>
    // </>
  );
}

// const mapStateToProps = state => {
//   return {
//     count: state.counter.count,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increaseCounter1: () => dispatch(increaseCounter()),

//     decreaseCounter: () => dispatch(decreaseCounter()),
//   }
// }

// connect as HOC: Higher Order Component
// export default connect(mapStateToProps, mapDispatchToProps)(App)
export default App;
