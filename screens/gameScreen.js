import React, {useEffect, useState, useRef} from 'react';
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
  Alert,
} from 'react-native';
import Card from '../components/Card';
import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {style} from 'styled-system';
import Colors from '../constants/colors/colors';
import NumberContainer from '../components/NumberContainer';
// import {Alert} from 'native-base';
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
  const [round, setRound] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const {userChoice, onGameOver} = props;
  useEffect(() => {
    console.log(userChoice);
    console.log(currentGuess);
    if (currentGuess == userChoice) {
      props.onGameOver(round);
    }
  }, [currentGuess, userChoice, onGameOver]);
  const nextGuessHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < props.userChoice) ||
      (direction === 'greater' && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        {text: 'Sorry!', style: 'cancel'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRound(prev => prev + 1);
  };
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.screen}>
      <Text>Oponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card propsStyle={styles.buttonContainer}>
        <Button
          title="LOWER"
          onPress={() => nextGuessHandler('lower')}></Button>
        <Button
          title="GREATER"
          onPress={() => nextGuessHandler('greater')}></Button>
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
