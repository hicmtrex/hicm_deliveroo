import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import { selectRestaurant } from '../store/restaurant-slice';
import { useSelector } from 'react-redux';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);

  const riders = ['John Doe', 'Ben Shelby', 'Thankful Kyrsten', 'Melany Robin'];

  const getRandomRider = () => {
    return riders[Math.floor(Math.random() * 3)];
  };

  return (
    <View className='bg-[#00ccbb] flex-1 pt-5'>
      <SafeAreaView className='z-50'>
        <View className='flex-row justify-between items-center p-5'>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            className='rounded-full bg-gray-100 '
          >
            <XCircleIcon color={'#00ccbb'} size={30} />
          </TouchableOpacity>
          <Text className='font-light text-white text-lg'>Order Help</Text>
        </View>

        <View className='bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md'>
          <View className='flex-row justify-between'>
            <View>
              <Text className='text-lg text-gray-400'>Estimated Arrival</Text>
              <Text className='text-4xl font-bold'>45-55 Minutes</Text>
            </View>
            <Image
              source={{ uri: 'https://links.papareact.com/fLs' }}
              className='h-20 w-20'
            />
          </View>
          <Progress.Bar size={30} color='#00ccbb' indeterminate={true} />
          <Text className='mt-3 text-gray-500'>
            Your order at {restaurant?.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: restaurant?.lat || 36.847019,
          longitude: restaurant?.long || 10.176752,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        className='flex-1 mt-10 z-0'
        mapType='mutedStandard'
      >
        <Marker
          coordinate={{
            latitude: restaurant?.lat || 36.847019,
            longitude: restaurant?.long || 10.176752,
          }}
          title={restaurant?.title}
          description={restaurant?.short_description}
          identifier='origin'
          pinColor='#00ccbb'
        />
      </MapView>
      <SafeAreaView className='bg-white flex-row items-center space-x-5 h-28'>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-12 w-12 bg-gray-300 p-4 rounded-full ml-5'
        />
        <View className='flex-1'>
          <Text className='text-lg'>{getRandomRider()}</Text>
          <Text className='text-gray-400'>Your ride</Text>
        </View>
        <Text className='text-[#00ccbb] text-lg mr-5 cursor-pointer'>Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
