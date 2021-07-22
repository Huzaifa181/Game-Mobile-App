import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimesions,
  TextInput,
  Button,
  useColorScheme,
  Alert,
  TouchableWithoutFeedback,
  View,
  Text,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import Colors from '../constants/colors/colors';
import MainButton from '../components/MainButton';
import Card from '../components/Card';
import Input from '../components/Input';
import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {style} from 'styled-system';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = ({onStartGame}) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedNumber, setSelectedNumber] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get('window').width / 4,
  );
  const isDarkMode = useColorScheme() === 'dark';
  const numberInputHandler = text => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };
  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get('window').width / 4);
    };
    Dimensions.addEventListener('change', () => updateLayout);
    return () => Dimensions.removeEventListener('change', () => updateLayout);
  });
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
        <Button
          title="START GAME"
          onPress={() => {
            onStartGame(selectedNumber);
          }}></Button>
      </Card>
    );
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={30}>
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
                <View style={buttonWidth}>
                  <Button
                    title="Reset"
                    color={Colors.accent}
                    onPress={resetInputHandler}></Button>
                </View>
                <View style={buttonWidth}>
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
      </KeyboardAvoidingView>
    </ScrollView>
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
    width: '80%',
    minWidth: 300,
    maxWidth: '95%',
    alignItems: 'center',
  },
});

export default StartGameScreen;
