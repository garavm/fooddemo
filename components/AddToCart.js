import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class AddToCart extends Component {

  static navigationOptions = {
    headerTitle: <Text style={{fontSize:24,color:"#ecf0f1"}}>Weybag Burger</Text>,
    headerRight: (
      <TouchableOpacity
        onPress={() => alert('hi')}
      >
        <View style={{
          margin:8,borderRadius:20,
          justifyContent: 'space-around',flex:1,
          alignItems: 'center', width: 40, height:40
        }}>
          <Icon name="shopping-cart" size={24} color="#ecf0f1" />
        </View>

      </TouchableOpacity>
    ),
    headerLeft: (

        <View style={{
          margin:8,borderRadius:20,
          justifyContent: 'space-around',flex:1,
          alignItems: 'center', width: 40, height:40
        }}>
        </View>
    ),
  };
  render() {
    return (
      <View style={styles.container}>
        <Image style={{ width: 200, height: 200 }}
          source={require('../assets/images/basil-dinner-food-8500.jpg')}
        />
        <Text style={{ padding: 10, fontSize: 24, fontWeight: 'bold', color: '#2ecc71' }}>$12</Text>
        <Text style={{ width: 300 }}>fvfh dfvbfdvf fdbfdbb nkjb dfjbnfb fdjbffdjk kfdjk jksvbfdjkvb</Text>
        <View style={{ margin: 20, height: 30, flexDirection: 'row', width: 250, justifyContent: 'space-around', alignItems: 'center' }}>

          <Icon name="minus" size={20} color="grey" />
          <Text style={{ fontSize: 20 }}>1</Text>
          <Icon name="plus" size={20} color="grey" />
        </View>
        <TouchableOpacity
        
        style={{height:50,
         backgroundColor:'#2ecc71',width: 300,
         justifyContent:'space-around',alignItems:'center',borderRadius: 25}}
         onPressIn={()=>this.props.navigation.navigate('ProcessOrder')}
         >
         <Text style={{color:'white'}}>ADD TO CART </Text></TouchableOpacity>
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