

import { createStackNavigator } from 'react-navigation'
import AddToCart from './components/AddToCart'
import OrderConfirm from './components/OrderConfirm'
import PayOrder from './components/PayOrder'
import ProcessOrder from './components/ProcessOrder'
import ProcessPayment from './components/ProcessPayment'



export default createStackNavigator({
  AddToCart: {
    screen: AddToCart
  },
  OrderConfirm: {
    screen: OrderConfirm
  },
  PayOrder: {
    screen: PayOrder
  },
  ProcessOrder: {
    screen: ProcessOrder
  },
  ProcessPayment: {
    screen: ProcessPayment
  }
},
{
  initialRouteName: 'AddToCart',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#2ecc71',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});


