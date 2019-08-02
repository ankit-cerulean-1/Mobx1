
import React, {Component} from 'react';
import { Provider, inject, observer  } from "mobx-react/native";
import Home from './app/Home';
import store from './app/stores';

export default observer(
  class App extends Component{
    render(){
      return (
        <Provider { ...store }> {/* { a } same with { a: a } */}
        {/* <Provider tesStore>  if your only use 1 store*/}
          <Home />
        </Provider>
      )
    }
  }
)