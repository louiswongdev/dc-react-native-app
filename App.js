import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import AppNavigator from './navigator/AppNavigator';

const initialState = {
  action: '',
  name: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'OPEN_MENU':
      return { ...state, action: 'openMenu' };
    case 'CLOSE_MENU':
      return { ...state, action: 'closeMenu' };
    case 'UPDATE_NAME':
      return { ...state, name: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
