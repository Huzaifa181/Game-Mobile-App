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
import {style} from 'styled-system';
import Colors from '../constants/colors/colors';
const Input = props => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <TextInput
      {...props}
      style={{...styles.input, ...props.propsStyle}}></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 0,
    marginVertical: 20,
  },
});

export default Input;
