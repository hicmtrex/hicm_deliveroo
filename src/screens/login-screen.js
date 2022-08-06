import { View, Text, SafeAreaView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const LoginScreen = () => {
  const [user, setUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {};

  return (
    <SafeAreaView>
      <View>
        <View>
          <Text>Email</Text>
          <TextInput
            onChangeText={(text) => setEmail(text)}
            textContentType='emailAddress'
            keyboardType='email-address'
            placeholder='email'
          />
        </View>
        <View>
          <Text>Password</Text>
          <TextInput
            onChangeText={(text) => setPassword(text)}
            textContentType='password'
            secureTextEntry
            autoCapitalize='none'
            placeholder='password'
          />
        </View>
        <Button onPress={onLogin} title='Login' className='w-full' />
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
