import { createStore, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from '../reducers/RootReducer';

export const configureStore = (preloadedState) => {
    const middleWares = [];
    const middleWareEnhancer = applyMiddleware(...middleWares);
    const storeEnhancers = [middleWareEnhancer];

    const composeEnhancer = composeWithDevTools(...storeEnhancers);

    const store = createStore(
        rootReducer,
        preloadedState,
        composeEnhancer
    );

    // we gonna implement hot module so everytime we make a change to the state the browser wont reload to show the changes

    if(process.env.NODE_ENV !== 'production'){
        if(module.hot){
            module.hot.accept('../reducers/RootReducer',() => {
                const newRootReducer = require('../reducers/RootReducer').default;
                store.replaceReducer(newRootReducer)
            })
        }
    }

    return store;
}

