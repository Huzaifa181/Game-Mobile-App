import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/Card';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {style} from 'styled-system';

const StartGameScreen = ({title}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Reset" color="#c717fc"></Button>
          </View>
          <View style={styles.button}>
            <Button title="Confirm" color="#f7287b"></Button>
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    marginVertical: 10,
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    width: '80%',
    alignItems: 'center',
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
