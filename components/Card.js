import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {style} from 'styled-system';

const Card = ({children, propsStyle}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return <View style={{...styles.card, ...propsStyle}}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    width: '80%',
    alignItems: 'center',
    // shadowColor: 'block',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});

export default Card;
