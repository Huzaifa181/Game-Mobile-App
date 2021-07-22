import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  useColorScheme,
  View,
  TextInput,
  Text,
} from 'react-native';
import Card from '../components/Card';
import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {style} from 'styled-system';
import Colors from '../constants/colors';
import NumberContainer from '../components/NumberContainer';
const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  const ranNum = Math.floor(Math.random() * (max - min) + min);
  if (ranNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return ranNum;
  }
};
const GameScreen = props => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 99, props.userChoice),
  );
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.screen}>
      <Text>Oponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card propsStyle={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => {}}></Button>
        <Button title="GREATER" onPress={() => {}}></Button>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    maxWidth: '80%',
    marginTop: 20,
  },
});

export default GameScreen;
