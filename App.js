
import React, {Component} from 'react';
import { Provider, inject, observer  } from "mobx-react/native";
import Home from './app/Home';
import store from "./app/TestStore";

export default observer(
  class App extends Component{
    
    render(){
      return (
        <Provider {...{store: store}}>
          <Home />
        </Provider>
      )
    }
  }
)