import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import * as Icon from "react-native-feather";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { themeColors } from '../theme';
import { featured } from '../constants';
import { emptyCart } from '../slices/cartSlice';

export default function DeliveryScreen() {
  const restaurant = useSelector(selectRestaurant);
  const navigation = useNavigation();
  const dispatch=useDispatch();
  const cancelOrder=()=>{
    navigation.navigate('Home')
    dispatch(emptyCart());
  }

  if (!restaurant?.lat || !restaurant?.lng) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16, color: 'gray' }}>Location data not available</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <MapView
        initialRegion={{
          latitude: restaurant.lat,
          longitude: restaurant.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={{ flex: 1 }}
        mapType="standard"
      >
        <Marker
          coordinate={{
            latitude: restaurant.lat,
            longitude: restaurant.lng,
          }}
          title={restaurant.name}
          description={restaurant.description}
          pinColor={themeColors.bgColor(1)}
        />
      </MapView>

      <View style={{ flex: 1, marginTop: -50, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
          <View>
            <Text style={{ fontSize: 18, color: 'gray', fontWeight: '600' }}>Estimated Arrival</Text>
            <Text style={{ fontSize: 32, fontWeight: 'bold', color: 'black' }}>20-30 Minutes</Text>
            <Text style={{ marginTop: 20, color: 'gray', fontWeight: '600' }}>Your order is on its way!</Text>
          </View>
          <Image style={{ width: 96, height: 96 }} source={require('../assets/images/bikeguy.gif')} />
        </View>

        <View
          style={{
            backgroundColor: themeColors.bgColor(0.8),
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 50,
            marginHorizontal: 10,
            marginVertical: 15,
          }}
        >
          <View
            style={{
              padding: 5,
              backgroundColor: 'rgba(255,255,255,0.4)',
              borderRadius: 50,
            }}
          >
            <Image
              style={{ width: 64, height: 64, borderRadius: 50 }}
              source={require('../assets/images/bikeguy.png')}
            />
          </View>

          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Dilshan</Text>
            <Text style={{ fontWeight: '600', color: 'white' }}>Your Rider</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 50,
                marginRight: 10,
              }}
            >
              <Icon.Phone fill={themeColors.bgColor(1)} stroke={themeColors.bgColor(1)} strokeWidth={1} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelOrder}
              style={{
                backgroundColor: 'white',
                padding: 10,
                borderRadius: 50,
              }}
            >
              <Icon.X stroke={'red'} strokeWidth={4} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}