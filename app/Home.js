import {inject, observer} from "mobx-react/native";
import React from "react";
import { ActivityIndicator,View, Text } from "react-native";
import store from "./TestStore";

@observer
export default class Home extends React.Component {

   componentDidMount() {
    //    alert(JSON.stringify(store))
       setTimeout(() => {
        store.loadingCompleted();
        alert(store.loading)
     }, 1000);
   }

   render() {
      return (
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{JSON.stringify(store.loading)}</Text>
           
         </View>
      );    
   }

}