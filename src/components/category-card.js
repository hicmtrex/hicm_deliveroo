import React from 'react';
import { Image, TouchableOpacity, Text } from 'react-native';

const CategoryCard = ({
  imgUrl = 'https://links.papareact.com/gn7',
  title,
}) => {
  return (
    <TouchableOpacity className='relative mr-2'>
      <Image className='h-20 w-20 rounded' source={{ uri: imgUrl }} />
      <Text className='absolute bottom-1 left-1 text-white font-bold'>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
