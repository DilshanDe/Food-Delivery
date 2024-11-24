import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme'; // Assume this is defined
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';

export default function CartScreen() {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);

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

                <View className='py-5'>
                    <Text className='text-center font-bold text-xl'>Your Cart</Text>
                    {restaurant ? (
                        <>
                            <Text className='text-center text-gray-500'>{restaurant.name}</Text>
                            <Text className='text-center text-gray-500'>{restaurant.description}</Text>
                        </>
                    ) : (
                        <Text className='text-center text-gray-500'>No restaurant selected</Text>
                    )}
                </View>
            </View>

            {/* Delivery */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center">
                <Image source={require('../assets/images/bikeguy.png')} className='w-20 h-20 rounded-full' />
                <Text className="flex-1 pl-2 py-5 text-center">Delivery in 20-30 minutes</Text>
                <TouchableOpacity>
                    <Text className='font-bold py-5' style={{ color: themeColors.text }}>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>

            {/* Dishes */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                className='bg-white pt-5'>
                {restaurant && restaurant.dishes ? (
                    restaurant.dishes.map((dish, index) => (
                        <View key={index}
                            className='flex-row items-center space-x- py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md'>
                            <Text className='font-bold' style={{ color: themeColors.text }}>
                                2 x
                            </Text>
                            <Image
                                source={dish.image} // Corrected placement of source
                                className='h-14 w-14 rounded-full'
                            />
                            <Text className='flex-1 font-bold text-gray-700'>
                                {dish.name}
                            </Text>
                            <Text className='font-semibold text-gray-700'>
                                RS.{dish.price}
                            </Text>
                            <TouchableOpacity
                                className='rounded-full p-1'
                                style={{ backgroundColor: themeColors.bgColor(1) }}
                            >
                                <Icon.Minus strokeWidth={2} height={20} width={20} stroke="white" />
                            </TouchableOpacity>
                        </View>
                    ))
                ) : (
                    <Text className='text-center text-gray-500'>No dishes in the cart</Text>
                )}
            </ScrollView>

            {/* Totals */}
            <View style={{ backgroundColor: themeColors.bgColor(0.2) }} className='py-6 px-8 rounded-t-3xl space-y-4'>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-700'>Subtotal</Text>
                    <Text className='text-gray-700'>RS.20</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-700'>Delivery Fee:</Text>
                    <Text className='text-gray-700'>RS.2</Text>
                </View>
                <View className='flex-row justify-between'>
                    <Text className='text-gray-700 font-extrabold'>Order total</Text>
                    <Text className='text-gray-700 font-extrabold'>RS.22</Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('OrderPreparing')}
                        style={{ backgroundColor: themeColors.bgColor(1) }}
                        className='p-3 rounded-full'>
                        <Text className="text-white text-center font-bold text-lg">Place Order</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
