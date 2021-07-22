import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Dimensions,
  StyleSheet,
  useColorScheme,
  View,
  TextInput,
  Button,
  Text,
  Image,
} from 'react-native';

import {
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {alignItems, style} from 'styled-system';
import Colors from '../constants/colors/colors';
const GameOverScreen = props => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text>The Game is Over</Text>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/success.png')}
            style={styles.image}
            resizeMode="cover"></Image>
        </View>
        <Text style={styles.upperText}>
          Your phone needed{' '}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> round to
          guess number
          <Text style={styles.highlight}> {props.userNumber}</Text>
        </Text>
        <Button title="NEW GAME" onPress={props.onRestart}></Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: Colors.primary,
  },
  imageContainer: {
    marginVertical: Dimensions.get('window').height / 30,
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  screen: {
    paddingVertical: 10,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperText: {
    fontSize: 20,
    marginHorizontal: 20,
    marginVertical: Dimensions.get('window').height / 20,
    textAlign: 'center',
  },
});

export default GameOverScreen;
