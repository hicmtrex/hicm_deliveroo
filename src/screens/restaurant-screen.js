import { View, Image, ScrollView, TouchableOpacity, Text } from 'react-native';
import React, { Fragment, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { urlFor } from '../../sanity';
import {
  ArrowLeftIcon,
  ChevronRightIcon,
  LocationMarkerIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from 'react-native-heroicons/solid';
import DishRow from '../components/dish-row';
import BasketIcon from '../components/basket-icon';
import { useDispatch } from 'react-redux';
import { setRestaurants } from '../store/restaurant-slice';

const RestaurantScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    params: {
      id,
      imgUrl,
      title,
      rating,
      genre,
      address,
      short_description,
      dishes,
      log,
      lat,
    },
  } = useRoute();

  useEffect(() => {
    dispatch(
      setRestaurants({
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
      })
    );
  }, []);

  return (
    <Fragment>
      <BasketIcon />
      <ScrollView>
        <View className='relative'>
          <Image
            source={{
              uri: urlFor(imgUrl).url(),
            }}
            className='w-full h-56 bg-gray-300 p-4'
          />
          <TouchableOpacity
            className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon color={'#00ccbb'} size={20} />
          </TouchableOpacity>
        </View>
        <View className='bg-white'>
          <View className='px-4 pt-4'>
            <Text className='text-3xl font-bold'>{title}</Text>
            <View className='flex-row space-x-2 my-1'>
              <View className='flex-row items-center space-x-1'>
                <StarIcon color={'green'} opacity={0.5} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-gray-500'>{rating}</Text> . {genre}
                </Text>
              </View>
              <View className='flex-row items-center space-x-1'>
                <LocationMarkerIcon color={'gray'} opacity={0.4} size={22} />
                <Text className='text-xs text-gray-500'>
                  <Text className='text-gray-500'>
                    Nearby . {address.substring(0, 30)}
                  </Text>
                </Text>
              </View>
            </View>

            <Text className='text-gray-500 mt-2 pb-4'>{short_description}</Text>
          </View>
          <TouchableOpacity className='flex-row  items-center space-x-2 p-4 border-y border-gray-300'>
            <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={20} />
            <Text className='pl-2 flex-1 text-md font-bold'>
              Have a food allergy?
            </Text>
            <ChevronRightIcon color={'#00ccbb'} />
          </TouchableOpacity>
        </View>
        <View className=' pb-28'>
          <Text className='px-4 pt-5 mb-3 font-bold'>Menu</Text>

          {dishes.map((dish) => (
            <DishRow
              dish={dish}
              key={dish._id}
              image={dish.image}
              id={dish._id}
              name={dish.name}
              description={dish.short_description}
              price={dish.price}
            />
          ))}
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default RestaurantScreen;
