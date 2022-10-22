
import { INCREMENT, DECREMENT,FETCH_USER_REQUEST,FETCH_USER_SUCCESS,FETCH_USER_ERROR  } from './types';
import axios from 'axios';

export const increaseCounter = () => {

    return {

        type: INCREMENT,
        payload: {like: 'buy milk', name: 'eric'},
    };

};

export const decreaseCounter = () => {

    return {

       type: DECREMENT,

    };

};

export const fetchAllUser = () => {

    return async(dispatch, getState) => {
        dispatch(fetchUsersRequest());
        try {
            const res = await axios.get('http://localhost:8080/users/all'); 
            const data = res && res.data ? res.data : [];
            dispatch(fetchUsersSuccess(data));
        } catch (error) {
            console.log(error);
            dispatch(fetchUsersError());
        }
    }
}

export const fetchUsersRequest = () => {
    return {
      type: FETCH_USER_REQUEST
    }
  }
  
export const fetchUsersSuccess = (dataUsers) => {
    return {
      type: FETCH_USER_SUCCESS,
      dataUsers
    }
  }
  
export const fetchUsersError = () => {
    return {
      type: FETCH_USER_ERROR
    }
  }