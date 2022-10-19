// https://dev.to/bhatvikrant/how-to-setup-redux-with-react-2020-cdj
import { combineReducers } from 'redux';

import counterReducer from './counterReducer';


    const rootReducer = combineReducers({

        counter: counterReducer,

    });

    export default rootReducer;