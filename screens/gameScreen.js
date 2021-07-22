import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Button,
  Dimensions,
  useColorScheme,
  View,
  TextInput,
  Text,
  Alert,
} from 'react-native';
import Card from '../components/Card';
import {Icon} from 'react-native-elements';
import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {style} from 'styled-system';
import Colors from '../constants/colors/colors';
import MainButton from '../components/MainButton';
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
const renderListItem = (value, noOfRound) => (
  <View style={styles.listItem} key={value}>
    <Text>#{noOfRound}</Text>
    <Text>{value}</Text>
  </View>
);

const GameScreen = props => {
  const initialGuess = generateRandomBetween(1, 99, props.userChoice);
  const [devicesWidth, setDeviceWidth] = useState(
    Dimensions.get('window').width,
  );
  const [devicesHeight, setDeviceHeight] = useState(
    Dimensions.get('window').height,
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [passGuesses, setPassGuesses] = useState([initialGuess.toString()]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const {userChoice, onGameOver} = props;
  useEffect(() => {
    if (currentGuess == userChoice) {
      onGameOver(passGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);
  useEffect(() => {
    const updateLayout = () => {
      setDeviceHeight(Dimensions.get('window').height);
      setDeviceWidth(Dimensions.get('window').width);
    };
    Dimensions.addEventListener('change', () => updateLayout);
    return () => Dimensions.removeEventListener('change', () => updateLayout);
  });
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
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setPassGuesses(prev => [...prev, nextNumber.toString()]);
  };
  if (devicesHeight < 500) {
    return (
      <View style={styles.screen}>
        <Text>Oponent's Guess</Text>
        <View style={styles.controls}>
          <Button
            title="LOWER"
            onPress={() => nextGuessHandler('lower')}></Button>
          <NumberContainer>{currentGuess}</NumberContainer>
          <Button
            title="GREATER"
            onPress={() => nextGuessHandler('greater')}></Button>
        </View>
        <View style={styles.listContainer}>
          <ScrollView contentContainerStyle={styles.list}>
            {passGuesses.map((guess, index) => {
              return renderListItem(guess, passGuesses.length - index);
            })}
          </ScrollView>
        </View>
      </View>
    );
  }
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
      <View style={styles.listContainer}>
        <ScrollView contentContainerStyle={styles.list}>
          {passGuesses.map((guess, index) => {
            return renderListItem(guess, passGuesses.length - index);
          })}
        </ScrollView>
      </View>
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
    marginTop: Dimensions.get('window').height > 600 ? 30 : 5,
  },
  listItem: {
    borderColor: '#ccc',
    marginVertical: 10,
    borderWidth: 1,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '60%',
  },
  listContainer: {
    width: Dimensions.get('window').width > 350 ? '60%' : '80%',
    flex: 1,
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    justifyContent: 'space-around',
  },
});

export default GameScreen;
