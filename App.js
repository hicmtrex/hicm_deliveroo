import { NavigationContainer } from '@react-navigation/native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home-screen';
import RestaurantScreen from './src/screens/restaurant-screen';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import BasketScreen from './src/screens/basket-screen';
import PreparingOrder from './src/screens/preparing-order';
import DeliveryScreen from './src/screens/delivery-screen';
import LoginScreen from './src/screens/login-screen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <TailwindProvider>
            <Stack.Navigator>
              <Stack.Screen
                name='Home'
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              {/* <Stack.Screen
                name='Login'
                component={LoginScreen}
                options={{ headerShown: false }}
              /> */}
              <Stack.Screen
                name='Restaurant'
                component={RestaurantScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='Basket'
                component={BasketScreen}
                options={{ presentation: 'modal', headerShown: false }}
              />
              <Stack.Screen
                name='PreparingOrder'
                component={PreparingOrder}
                options={{
                  presentation: 'fullScreenModal',
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name='Delivery'
                component={DeliveryScreen}
                options={{
                  presentation: 'fullScreenModal',
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </TailwindProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
