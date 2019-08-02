import {inject, observer} from "mobx-react/native" // "maybe mobx-react/native and "mobx-react" look same
import React from "react";
import { ActivityIndicator,View, Text } from "react-native";

@inject('tesStore')
@observer
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
            <Text>Landing Page = {JSON.stringify(this.props.tesStore.loading)}</Text>
         </View>
      );
   }
}

export default Home
/* without decoration
   export default (inject('tesStore')(observer(Home)))
*/