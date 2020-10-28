import { createStore, applyMiddleware, combineReducers  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applicationReducers } from '../redux/reducers'
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas/index';

const applicationStore = () => {
    const composeEnhancers = composeWithDevTools({});
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(combineReducers(applicationReducers),composeEnhancers(applyMiddleware(sagaMiddleware))); 
    sagaMiddleware.run(rootSaga);
    return store;
}

export default applicationStore;