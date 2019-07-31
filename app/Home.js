import {inject, observer} from "mobx-react";
import React from "react";
import { ActivityIndicator,View, Text } from "react-native";

@inject('store') @observer
export default class Home extends React.Component {

   componentDidMount() {
     alert(JSON.stringify(this.props))
   }
   render() {
      return (
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Landing Page</Text>
         </View>
      );
   }

}