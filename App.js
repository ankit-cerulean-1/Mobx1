
import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Provider } from "mobx-react/native";
import Home from './app/Home';


class App extends Component{
  
  render(){
    return (
      <Provider  >
        <Home />
      </Provider>
    )
  }
}

export default App;