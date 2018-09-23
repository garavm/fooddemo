import React, { Component } from 'react';
import {
  StyleSheet, Text,Dimensions,
  TextInput, View, Image, TouchableOpacity, TouchableNativeFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class ProcessPayment extends Component {

  static navigationOptions = {
    headerTitle: <Text style={{ fontSize: 24, color: "#ecf0f1" }}>Delivery Details</Text>,
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
          style={{ width: 100, height: 100, borderRadius: 50 }}
          source={require('../assets/images/profile-pics.jpg')}
        />
        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Home Address</Text>
        <TextInput
          style={{ margin: 8,height: 50,width: Dimensions.get("window").width*0.7,
           backgroundColor: '#f1f2f6'}}
           textAlign={'center'}
          value="crarrer the petrox 11"
        />
         <TextInput
          style={{ margin: 8,height: 50,width: Dimensions.get("window").width*0.7, backgroundColor: '#f1f2f6'}}
          textAlign={'center'}
          value="Barasola"
        />
         <TextInput
          style={{ margin: 8,height: 50,width: Dimensions.get("window").width*0.7, backgroundColor: '#f1f2f6', }}
          textAlign={'center'}
          value="8008"
        />
         <TextInput
          style={{ margin: 8, height: 50,width: Dimensions.get("window").width*0.7, backgroundColor: '#f1f2f6',}}
          textAlign={'center'}
          placeholder="Phone number"
        />
        <TouchableOpacity
          style={{
            margin: 8,
            height: 50,
            backgroundColor: '#2ecc71', width: 300,
            justifyContent: 'space-around', alignItems: 'center', borderRadius: 25
          }}
          onPressIn={() => this.props.navigation.navigate('PayOrder')}>
          <Text style={{ color: 'white' }}>PROCESS TO PAYMENT </Text></TouchableOpacity>
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