import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applicationReducers } from '../redux/reducers'
import thunk from 'redux-thunk';

const applicationStore = () => {
    const composeEnhancers = composeWithDevTools({});
    const store = createStore(combineReducers(applicationReducers),composeEnhancers(applyMiddleware(thunk))); 
    return store;
}

export default applicationStore;