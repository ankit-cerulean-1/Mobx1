import {inject, observer} from "mobx-react/native";
import React from "react";
import { ActivityIndicator,View, Text } from "react-native";

export default inject('store')(
   observer(
      class Home extends React.Component {
        componentDidMount() {
           setTimeout(()=>{
              this.props.store.loadingCompleted();
            alert(JSON.stringify(this.props))
           },2000);

        }
        render() {
           return (
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                 <Text>Landing Page = {JSON.stringify(this.props.store.loading)}</Text>
              </View>
           );
        }
     }
  )

)
