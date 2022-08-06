import { View } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';

const PreparingOrder = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 5000);
  }, []);

  return (
    <View className='bg-[#00ccbb] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require('../../assets/giphy.gif')}
        className='h-96 w-96'
        animation={'slideInUp'}
        iterationCount={1}
      />
      <Animatable.Text
        animation={'slideInUp'}
        iterationCount={1}
        className='text-lg my-10 text-white font-bold text-center'
      >
        Wating for Restaurant to accpet your order!
      </Animatable.Text>
      <Progress.Circle size={60} indeterminate={true} color='white' />
    </View>
  );
};

export default PreparingOrder;
