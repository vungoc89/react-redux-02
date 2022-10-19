
// https://dev.to/bhatvikrant/how-to-setup-redux-with-react-2020-cdj
// npm install --save-exact redux@4.1.2 react-redux@7.2.6
// npm install --save-exact redux-devtools-extension@2.13.9
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
    import rootReducer from '../reducer/rootReducer';


    const store = createStore(

        rootReducer,

        composeWithDevTools(),

    );


    export default store;