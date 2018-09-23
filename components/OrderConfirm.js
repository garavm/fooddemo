import React, { Component } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class OrderConfirm extends Component {

  static navigationOptions = {
    headerTitle: <Text style={{ fontSize: 24, color: "#ecf0f1" }}>Order Confirmation</Text>,
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20, marginTop: 20 }}>ORDER CONFIRMED</Text>
        <Text style={{ padding: 10 }}>Our driver is on his way to collect our order and will deliver it to your home shortly!</Text>
        <View style={{
          height: Dimensions.get("window").height - 20,
          backgroundColor: 'grey',
          width: Dimensions.get("window").width, justifyContent: 'space-around', alignItems: 'center'
        }}>
          <Text>Maps to add</Text>
        </View>
        <TouchableWithoutFeedback >
          <View style={{
            position: 'absolute', bottom: 20,
            right: 20, height: 70, width: 70, backgroundColor: '#2ecc71',
            borderRadius: 35,justifyContent:'center',alignItems:'center'
          }}>
            <Text style={{color:'white',fontWeight:'bold',fontSize:24}}>12</Text>
            <Text style={{color:'white',fontSize:12}}>mins</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});