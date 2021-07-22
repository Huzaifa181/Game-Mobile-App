import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/startGameScreen';
import GameScreen from './screens/gameScreen';
import GameOverScreen from './screens/GameOverScreen';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [userNumber, setUserNumber] = useState();
  const [guessRound, setGuessRound] = useState(0);
  const isDarkMode = useColorScheme() === 'dark';
  const startGameHandler = selectedNumber => {
    setUserNumber(selectedNumber);
    setGuessRound(0);
  };
  const configureNewGameHandler = () => {
    setGuessRound(0);
    setUserNumber(null);
  };
  const gameOverHandler = noOfRounds => {
    console.log('huui');
    setGuessRound(noOfRounds);
  };
  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && guessRound <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRound > 0) {
    content = (
      <GameOverScreen
        roundsNumber={guessRound}
        userNumber={userNumber}
        onRestart={configureNewGameHandler}
      />
    );
  }
  return (
    <View style={styles.screen}>
      <Header title="Huzaifa"></Header>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
