import { legacy_createStore as reduxCreateStore,
    combineReducers,
    applyMiddleware,
    compose,

 } from 'redux';

//  import { connectRouter, routerMiddleware } from "connected-react-router";
 import { thunk } from 'redux-thunk';


import { UserReducer } from "../users/reducers";
import { ItemsReducer } from "../items/reducers";
import { CartsReducer } from "../carts/reducers";


const CreateStore = () => {
  return reduxCreateStore(
   combineReducers({
    // router:connectRouter(),
    users: UserReducer,
    items: ItemsReducer,
    carts: CartsReducer,
   }),

   compose(
    applyMiddleware(thunk)
   )
  )
}

export default CreateStore;



