import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,TextInput,Dimensions, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class PayOrder extends Component {

  static navigationOptions = {
    headerTitle: <Text style={{fontSize:24,color:"#ecf0f1"}}>Payment Details</Text>,
    headerRight: (
      <TouchableNativeFeedback
        onPress={() => alert('hi')}
      >
        <View style={{
          justifyContent: 'space-around',
          alignItems: 'center', flex: 1, height: 55, width: 40
        }}>
          <Icon name="shopping-cart" size={24} color="#ecf0f1" />
        </View>

      </TouchableNativeFeedback>
    ),
  };
  render() {
    return (
      <View style={styles.container}>
         <Image
          style={{ width: Dimensions.get("window").width*0.7, height: 200, borderRadius: 2 }}
          source={require('../assets/images/51bdxecnHCL.jpg')}
        />
        <TextInput
          style={{ margin: 8,height: 50,width: Dimensions.get("window").width*0.7,
           backgroundColor: '#f1f2f6'}}
           textAlign={'center'}
          value="Mario Javier Zubina"
        />
         <TextInput
          style={{ margin: 8,height: 50,width: Dimensions.get("window").width*0.7, backgroundColor: '#f1f2f6'}}
          textAlign={'center'}
          value="1234 6778 9999 9776"
        />
         <TextInput
          style={{ margin: 8,height: 50,width: Dimensions.get("window").width*0.7, backgroundColor: '#f1f2f6', }}
          textAlign={'center'}
          value="08/22"
        />
         <TextInput
          style={{ margin: 8, height: 50,width: Dimensions.get("window").width*0.7, backgroundColor: '#f1f2f6',}}
          textAlign={'center'}
          placeholder="CVV"
        />
        <TouchableOpacity
         style={{height:50,
         backgroundColor:'#2ecc71',width: 300,
         justifyContent:'space-around',alignItems:'center',borderRadius: 25}}
         onPressIn={()=>this.props.navigation.navigate('OrderConfirm')}>
         <Text style={{color:'white'}}>PAY ORDER </Text></TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});