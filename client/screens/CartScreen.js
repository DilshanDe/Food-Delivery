import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme'; // Assume this is defined
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/cartSlice';

export default function CartScreen() {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const CartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({});
  const dispatch=useDispatch();

  useEffect(() => {
    const items = CartItems.reduce((group, item) => {
      if (group[item.id]) {
        group[item.id].push(item);
      } else {
        group[item.id] = [item];
      }
      return group;
    }, {});
    setGroupedItems(items);
  }, [CartItems]);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Back Button */}
      <View style={{ paddingVertical: 16, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            backgroundColor: themeColors.bgColor(1),
            position: 'absolute',
            top: 40,
            left: 20,
            zIndex: 10,
            borderRadius: 50,
            padding: 10,
            shadowColor: '#000',
            shadowOpacity: 0.3,
            shadowRadius: 4,
          }}
        >
          <Icon.ArrowLeft strokeWidth={3} stroke="white" />
        </TouchableOpacity>

        <View className="py-5">
          <Text className="text-center font-bold text-xl">Your Cart</Text>
          {restaurant ? (
            <>
              <Text className="text-center text-gray-500">{restaurant.name}</Text>
              <Text className="text-center text-gray-500">{restaurant.description}</Text>
            </>
          ) : (
            <Text className="text-center text-gray-500">No restaurant selected</Text>
          )}
        </View>
      </View>

      {/* Delivery */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="flex-row px-4 items-center"
      >
        <Image
          source={require('../assets/images/bikeguy.png')}
          className="w-20 h-20 rounded-full"
        />
        <Text className="flex-1 pl-2 py-5 text-center">Delivery in 20-30 minutes</Text>
        <TouchableOpacity>
          <Text className="font-bold py-5" style={{ color: themeColors.text }}>
            Change
          </Text>
        </TouchableOpacity>
      </View>

      {/* Dishes */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 50,
        }}
        className="bg-white pt-5"
      >
        {Object.entries(groupedItems).length > 0 ? (
          Object.entries(groupedItems).map(([key, items]) => {
            let dish = items[0];
            return (
              <View
                key={key}
                className="flex-row items-center space-x-4 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md"
              >
                <Text className="font-bold" style={{ color: themeColors.text }}>
                  {items.length}x
                </Text>
                <Image
                  source={dish.image} // Assuming `dish.image` is a valid source
                  className="h-14 w-14 rounded-full"
                />
                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                <Text className="font-semibold text-gray-700">RS.{dish.price}</Text>
                <TouchableOpacity
                onPress={()=>dispatch(removeFromCart({id:dish.id}))}
                  className="rounded-full p-1"
                  style={{ backgroundColor: themeColors.bgColor(1) }}
                >
                  <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                </TouchableOpacity>
              </View>
            );
          })
        ) : (
          <Text className="text-center text-gray-500">No dishes in the cart</Text>
        )}
      </ScrollView>

      {/* Totals */}
      <View
        style={{ backgroundColor: themeColors.bgColor(0.2) }}
        className="py-6 px-8 rounded-t-3xl space-y-4"
      >
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Subtotal</Text>
          <Text className="text-gray-700">RS.{cartTotal.toFixed(2)}</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700">Delivery Fee:</Text>
          <Text className="text-gray-700">RS.100</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-700 font-extrabold">Order Total</Text>
          <Text className="text-gray-700 font-extrabold">RS.{(cartTotal + 100).toFixed(2)}</Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('OrderPreparing')}
            style={{ backgroundColor: themeColors.bgColor(1) }}
            className="p-3 rounded-full"
          >
            <Text className="text-white text-center font-bold text-lg">Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
