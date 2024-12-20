import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparing from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeScreen}
        />
        <Stack.Screen
          name="Restaurant"
          options={{ headerShown: false }}
          component={RestaurantScreen}
        />
        <Stack.Screen
          name="Cart"
          options={{ 
            headerShown: false,
            presentation: 'modal' 
          }}
          component={CartScreen}
        />
        <Stack.Screen
          name="OrderPreparing"
          options={{ 
            headerShown: false,
            presentation: 'fullScreenModal' 
          }}
          component={OrderPreparing}
        />
        <Stack.Screen
          name="Delivery"
          options={{ 
            headerShown: false,
            presentation: 'fullScreenModal' 
          }}
          component={DeliveryScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
