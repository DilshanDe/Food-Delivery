import React from 'react';
import { View, TouchableOpacity, Text, Image, ScrollView } from 'react-native';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { themeColors } from '../theme'; // Assume this is defined
import { featured } from '../constants';

export default function CartScreen() {
    const navigation = useNavigation();
    const restaurant = featured[0];

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
                    <Text className='text-center text-gray-500'>{restaurant.name}</Text>
                    <Text className='text-center text-gray-500'>{restaurant.description}</Text>
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
                {
                    restaurant.dishes.map((dish, index) => {
                        return (
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
                                style={{backgroundColor:themeColors.bgColor(1)}}
                                >
                                    <Icon.Minus strokeWidth={2} height={20} width={20}stroke="white"/>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/* totals*/}
            <View style={{backgroundColor:themeColors.bgColor(0.2)}} className='py-6 px-8 rounded-t-3xl space-y-4'>

            </View>
        </View>
    );
}
