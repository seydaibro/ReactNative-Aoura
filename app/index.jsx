// App.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View className='flex  flex-1 justify-center items-center'>
      <Text className='text-3xl'>Welcome </Text>
      <Link href="/Profile">Go to Profile</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  welcome: {
    fontSize: 24,
    color: '#333',
  },
});

export default App;
