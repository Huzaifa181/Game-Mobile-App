import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import {
  NativeBaseProvider,
  Container,
  Text,
  Box,
  Button,
  SimpleGrid,
  VStack,
  HStack,
} from 'native-base';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return <View></View>;
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#B980F0',
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default App;
