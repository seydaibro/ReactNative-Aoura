// App.js

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome </Text>
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
