import { View, Text, TextInput, ScrollView } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Icon from "react-native-feather";
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';

import FeaturedRow from '../components/FeaturedRow';
import { featured } from '../constants';
import Categories from '../components/categories';

export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar barStyle="dark-content" />

      {/* Search Bar */}
      <View className="flex-row items-center px-4 pb-2">
        <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
          <Icon.Search height={25} width={25} stroke="gray" />
          <TextInput 
            placeholder="Restaurants" 
            className="ml-2 flex-1" 
          />
          <View className="flex-row items-center pl-2 border-l-2 border-l-gray-300">
            <Icon.MapPin height={20} width={20} stroke="gray" />
            <Text className="text-gray-400 ml-3">Sri Lanka, Colombo</Text>
          </View>
        </View>

        <View className="bg-primary p-3 rounded-full ml-2">
          <Icon.Sliders height={20} width={20} strokeWidth={2.5} stroke="white" />
        </View>
      </View>

      {/* Main Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Categories */}
        <Categories />

        {/* Featured Rows */}
        <View className="mt-5">
          {featured.map((item) => (
            <FeaturedRow
              key={item.id}
              title={item.name}
              description={item.description}
              restaurants={item.dishes}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
