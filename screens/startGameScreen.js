import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  Button,
  useColorScheme,
  Alert,
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
import NumberContainer from '../components/NumberContainer';

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
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert(
        'Invalid Number',
        'Number has to be number between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}],
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumber(enteredValue);
    setEnteredValue('');
    Keyboard.dismiss();
  };
  let confirmedOutput;
  if (confirmed) {
    confirmedOutput = (
      <Card propsStyle={styles.summaryContainer}>
        <Text>You Selected</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button title="START GAME"></Button>
      </Card>
    );
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
            value={enteredValue}
            keyboardType="numeric"
            onChangeText={numberInputHandler}
            propsStyle={styles.input}></Input>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetInputHandler}></Button>
            </View>
            <View style={styles.button}>
              <Button
                onPress={resetConfirmHandler}
                title="Confirm"
                color={Colors.primary}></Button>
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
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
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
