import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { selectBasketitems, selectBasketTotal } from '../store/basket-slice';
import { useSelector } from 'react-redux';
import Currency from 'react-currency-formatter';
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
  const items = useSelector(selectBasketitems);
  const basketTotal = useSelector(selectBasketTotal);
  const navigation = useNavigation();
  if (items.length === 0) return null;
  return (
    <View className=' absolute bottom-5 w-full px-4 z-50'>
      <TouchableOpacity
        onPress={() => navigation.navigate('Basket')}
        className='bg-[#00ccbb] p-4 rounded-lg flex-row items-center space-x-1'
      >
        <Text className='text-white  font-extrabold text-lg py-1 px-2 bg-[#01a296]'>
          {items?.length}
        </Text>
        <Text className='flex-1 text-white font-extrabold text-lg text-center'>
          View Basket
        </Text>
        <Text className='text-lg text-white font-extrabold'>
          <Currency quantity={basketTotal} currency='USD' />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
