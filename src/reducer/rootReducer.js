// https://dev.to/bhatvikrant/how-to-setup-redux-with-react-2020-cdj
// npm install --save-exact redux@4.1.2 react-redux@7.2.6
// npm install --save-exact redux-devtools-extension@2.13.9
// npm install --save-exact redux-thunk@2.4.1
// npm install --save-exact redux-bootstrap@2.2.1
// npm install --save-exact bootstrap@5.1.3
import { useReducer } from 'react';
import { combineReducers } from 'redux';

import counterReducer from './counterReducer';
import userReducer from './userReducer';

    const rootReducer = combineReducers({

        counter: counterReducer,
        user: userReducer,
    });

    export default rootReducer;