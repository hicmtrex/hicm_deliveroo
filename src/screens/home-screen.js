import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  ChevronDownIcon,
  UserIcon,
  SearchIcon,
  AdjustmentsIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/categories';
import FeaturedRow from '../components/featured-row';
import client from '../../sanity';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const navigation = useNavigation();
  const getCategories = () => {
    client.fetch(`*[_type == "category"]`).then((data) => {
      setFeaturedCategories(data);
    });
  };

  const searchProduct = (text) => {
    setFeaturedCategories(
      featuredCategories.filter((i) =>
        i.name.toLowerCase().includes(text.toLowerCase())
      )
    );
    if (text === '') {
      getCategories();
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <SafeAreaView className='bg-white pt-10 pb-2'>
      {/*header*/}

      <View className='flex-row pb-3 items-center mx-4 space-x-2 '>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className='h-7 w-7 bg-gray-300 p-4 rounded-full'
        />
        <View className='flex-1'>
          <Text className='font-bold text-gray-400 text-xs'>Deliver Now!</Text>
          <Text className='font-bold text-lg'>
            Current Location!
            <ChevronDownIcon size={20} color='#00CCBB' />
          </Text>
        </View>
        <TouchableOpacity>
          <UserIcon size={35} color='#00CCBB' />
        </TouchableOpacity>
      </View>

      {/*Search*/}
      <View className='flex-row items-center space-x-2 pb-2 mx-4 '>
        <View className='flex-row flex-1 space-x-2  bg-gray-200 p-3'>
          <SearchIcon color={'gray'} size={20} />
          <TextInput
            className=' rounded'
            onChangeText={(text) => searchProduct(text)}
            placeholder='Search with Category'
            keyboardType='default'
          />
        </View>
        <AdjustmentsIcon color='#00CCBB' />
      </View>
      {/* BODY */}

      <ScrollView
        className='bg-gray-100 '
        contentContainerStyle={{
          paddingBottom: 130,
        }}
      >
        <Categories />

        {featuredCategories?.map((category) => (
          <FeaturedRow
            title={category.name}
            description='Paid placements from our partners'
            id={category._id}
            key={category._id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
