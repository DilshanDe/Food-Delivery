import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { categories } from '../constants';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <View style={{ marginTop: 16 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
      >
        {categories.map((category, index) => {
          let isActive = category.id === activeCategory;
          let btnClass = isActive ? 'bg-gray-600' : 'bg-gray-200';
          let textClass = isActive ? 'font-semibold text-gray-800' : 'text-gray-500';

          return (
            <View
              key={index}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 24, // Equivalent to `mr-6`
              }}
            >
              <TouchableOpacity
                onPress={() => setActiveCategory(category.id)}
                style={[
                  {
                    padding: 8,
                    borderRadius: 50,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                  },
                  isActive ? { backgroundColor: '#4B5563' } : { backgroundColor: '#E5E7EB' }, 
                ]}
              >
                <Image
                  style={{ width: 45, height: 45, resizeMode: 'cover' }}
                  source={category.image}
                />
              </TouchableOpacity>
              <Text
                style={[
                  { fontSize: 14, marginTop: 8 },
                  isActive
                    ? { fontWeight: '600', color: '#1F2937' }
                    : { color: '#6B7280' },
                ]}
              >
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
