import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  useColorScheme,
  TouchableWithoutFeedback,
  View,
  Text,
  Keyboard,
} from 'react-native';
import Colors from '../constants/colors';
import Card from '../components/Card';
import Input from '../components/Input';
import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {style} from 'styled-system';
import colors from '../constants/colors';

const StartGameScreen = ({title}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';
  const numberInputHandler = text => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };
  const resetConfirmHandler = () => {
    const chooseNumber = parseInt(enteredValue);
    if (chooseNumber === NaN || chooseNumber <= 0 || chooseNumber > 99) {
      return;
    }
    setConfirmed(true);
    setSelectedNumber(enteredValue);
    setEnteredValue('');
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = <Text>Choosen Number: {selectedNumber}</Text>;
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card propsStyle={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            blurOnSubmit
            autoCapitalize="none"
            maxLength={2}
            autoCorrect={false}
            keyboardType="numeric"
            propsStyle={styles.input}></Input>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={colors.accent}
                onPress={resetInputHandler}></Button>
            </View>
            <View style={styles.button}>
              <Button
                onPress={resetConfirmHandler}
                title="Confirm"
                color={colors.primary}></Button>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  input: {
    width: 30,
    textAlign: 'center',
  },
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
