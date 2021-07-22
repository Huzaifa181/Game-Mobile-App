import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  TextInput,
  Text,
} from 'react-native';

import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {alignItems, style} from 'styled-system';
import Colors from '../constants/colors';
const GameOverScreen = props => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
