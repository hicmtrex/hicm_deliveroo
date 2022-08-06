import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { selectRestaurant } from '../store/restaurant-slice';
import { useSelector, useDispatch } from 'react-redux';
import { deleteBasket, reset, selectBasketTotal } from '../store/basket-slice';
import { XCircleIcon } from 'react-native-heroicons/solid';
import { urlFor } from '../../sanity';
import Currency from 'react-currency-formatter';

const BasketScreen = () => {
  const navigation = useNavigation();
  const restaurant = useSelector(selectRestaurant);
  const { items } = useSelector((state) => state.basket);
  const basketTotal = useSelector(selectBasketTotal);

  const dispatch = useDispatch();

  return (
    <SafeAreaView className='flex-1 bg-white pt-4'>
      <View className='flex-1 bg-gray-100'>
        <View className='p-5 border-b border-[#00ccbb] bg-white shadow-xs'>
          <View>
            <Text className='text-lg font-bold text-center'>Basket</Text>
            <Text className='text-center text-gray-400'>
              {restaurant.title}
            </Text>
          </View>
          <TouchableOpacity
            onPress={navigation.goBack}
            className='rounded-full bg-gray-100 absolute top-3 right-5'
          >
            <XCircleIcon color={'#00ccbb'} size={50} />
          </TouchableOpacity>
        </View>
        <View className='flex-row items-center space-x-4 px-4 py-3 bg-white my-5'>
          <Image
            source={{
              uri: 'https://links.papareact.com/wru',
            }}
            className='h-7 w-7 bg-gray-300 p-4 rounded-full'
          />
          <Text className='flex-1'>Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className='text-[#00ccbb]'>Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className='divide-y divide-gray-200'>
          {items.map((item) => (
            <View
              key={item.id}
              className='flex-row items-center space-x-3 bg-white py-2 px-5'
            >
              <Text className='text-[#00ccbb]'>{item.qty} x</Text>

              <Image
                source={{
                  uri: urlFor(item?.image).url(),
                }}
                className='h-12 w-12 rounded-full'
              />
              <Text className='flex-1'>{item?.name}</Text>
              <Text className='text-gray-600'>
                <Currency quantity={item?.price} currency='USD' />
              </Text>
              <TouchableOpacity onPress={() => dispatch(deleteBasket(item))}>
                <Text className='text-[#00ccbb] text-xs'>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className='p-5 bg-white mt-5 space-y-4'>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>subtotal</Text>
            <Text className='text-gray-400'>
              <Currency quantity={basketTotal} currency='USD' />
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text className='text-gray-400'>Delivery Fee</Text>
            <Text className='text-gray-400'>
              <Currency quantity={5.99} currency='USD' />
            </Text>
          </View>
          <View className='flex-row justify-between'>
            <Text>Order Total</Text>
            <Text className=' font-extrabold'>
              <Currency quantity={basketTotal + 5.99} currency='USD' />
            </Text>
          </View>
          <TouchableOpacity
            disabled={!items.length}
            onPress={() => {
              navigation.navigate('PreparingOrder');
              dispatch(reset());
            }}
            className='rounded-lg bg-[#00ccbb] p-4'
          >
            <Text className='text-center text-white text-lg font-bold'>
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;
