// import logo from './logo.svg';
// import './App.css';
// import { connect } from "react-redux";
// import {
//   increaseCounter,
//   decreaseCounter,
// } from "./action/actions";

// import {useSelector, useDispatch} from 'react-redux'; 
// import {useEffect} from 'react';
// import axios from 'axios';
import Home from './components/Home';
function App(props) {

  // const newCount = useSelector(
  //   (state) => {return state.counter.count}
  //   ); 
  //   const dispatch = useDispatch(); 

  // const handleIncrease = () => {
  //   // dispatch action
  //   // props.increaseCounter1();
  //   dispatch(increaseCounter()); 
  // }

  // const fetchAllUser = async() => {
  //   const res = await axios.get('http://localhost:8080/users/all'); 
  //   console.log('>>> res data: ', res);
  // }

  // useEffect(() => {
  //   fetchAllUser();
  // }, []);
  
  return (
    <>
      <Home/>
    </>
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
