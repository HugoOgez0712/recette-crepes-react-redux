
import {createStore, combineReducers} from 'redux';

import TodosReducer from './todosReducer'


// On commence par créer un store
// En second paramètre, on va avoir des middlewares, permet d'écouter les changements du store et de rajotuer des comportements
// store.subscribe(
 const store =  createStore(
    combineReducers({
  todos: TodosReducer,
  filter: (state = 0, action) => state
  
    }), 
    
    
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

    export default store;