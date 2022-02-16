import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import { TodolistStore } from './components/Todolist';
function App() {
  return (
    <Provider store={store}>
      <TodolistStore/>
    </Provider>
  );
}

export default App;
