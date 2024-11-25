// App.js
import React from 'react';
import AppNavigator from './AppNavigator';
import { Provider } from 'react-redux'
import { store } from './store';



export default function App() {
  return (
    <Provider store={store}>
       <AppNavigator />

    </Provider>
 
  );
}


