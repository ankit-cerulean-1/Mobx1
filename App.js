
import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Provider } from "mobx-react";
import Home from './app/Home';
import store from "./app/TestStore";

class App extends Component{
  
  render(){
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}

export default App;