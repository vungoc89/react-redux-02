
// https://dev.to/bhatvikrant/how-to-setup-redux-with-react-2020-cdj
// npm install --save-exact redux@4.1.2 react-redux@7.2.6
// npm install --save-exact redux-devtools-extension@2.13.9
// npm install --save-exact redux-thunk@2.4.1
// npm install --save-exact redux-bootstrap@2.2.1
// npm install --save-exact bootstrap@5.1.3
import  {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducer/rootReducer';


    const store = createStore(

        rootReducer,

        composeWithDevTools(applyMiddleware(thunkMiddleware)),

    );


    export default store;