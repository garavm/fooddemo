import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class ProcessOrder extends Component {

  static navigationOptions = {
    headerTitle: <Text style={{ fontSize: 24, color: "#ecf0f1" }}>Your Order</Text>,
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
        <View style={styles.foodList}>
          <View style={{
            width: Dimensions.get("window").width - 50, height: 150,
            justifyContent: 'flex-start', paddingLeft: 30, flexDirection: 'row',
            alignItems: 'center'}}>
            <Image
              style={{ width: 100, height: 100, }}
              source={require('../assets/images/basil-dinner-food-8500.jpg')}/>
            <View style={{
              height: 100, flexDirection: 'column',
              paddingLeft: 30, justifyContent: 'center', alignItems: 'flex-start'}}>
              <Text style={{ color: 'black', fontWeight: 'bold',fontSize: 20 }}>Wayback figure</Text>
              <Text style={{ color: '#2ecc71', fontWeight: 'bold',fontSize: 20 }}>$12</Text>

            </View>
          </View>
          <View style={{
            height: 150, flexDirection: 'column', width: 50,
            justifyContent: 'space-around', alignItems: 'center'}}>

            <Icon name="plus" size={20} color="grey" />
            <Text style={{ fontSize: 20 }}>1</Text>
            <Icon name="minus" size={20} color="grey" />
            
          </View>

        </View>
        <TouchableOpacity
          style={{
            height: 50, margin: 20,
            backgroundColor: '#2ecc71', width: 300,
            justifyContent: 'space-around', alignItems: 'center', borderRadius: 25
          }}
          onPressIn={() => this.props.navigation.navigate('ProcessPayment')}>
          <Text style={{ color: 'white' }}>PROCESS ORDER </Text></TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF',
  },
  foodList: {
    flexDirection: 'row',
    width: Dimensions.get("window").width,
    height: 150,
    borderBottomColor: '#ecf0f1',
    borderBottomWidth: 1
  }
});