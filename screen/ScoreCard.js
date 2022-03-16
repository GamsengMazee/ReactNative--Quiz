import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native'
import React, { useEffect} from 'react'
import { Button } from 'react-native-paper';
import colors from '../constants/colors';
import { useSelector, useDispatch } from 'react-redux';
import { scoreReset } from '../store/action';

const SelectLanguage = ({ route, navigation }) => {
     const { selectedLanguage, numberOfQuiz } = route.params;

     const myScore = useSelector((state) => {
      return state.scoreState;
   })

   const dispatch = useDispatch()

   const tryAgainBtnHandler = () => {
     dispatch(scoreReset())
     navigation.push('gamescreen', {
      selectedLanguage: selectedLanguage
    }) 
   }

   const homeBtnHandler = () => {
    dispatch(scoreReset())
    navigation.navigate('home');
   }


   //handle backButton
   useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => homeBtnHandler() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

   const totalScore = numberOfQuiz * 5
   const correctPercentage = ((myScore/(numberOfQuiz * 5)) * 100).toFixed(2) 
  return (
    <View style={styles.container}>
      <Text style={styles.langHead}>Quiz Results</Text>
      <View style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <View style={styles.resultText}>
            <Text style={styles.textScore}>You Score:{' '}

              <Text style={styles.textSpan}>{myScore}/{totalScore}</Text>

            </Text>
          </View>

          <View style={styles.resultText}>
            <Text style={styles.textScore}>Correct Answer:
              <Text style={styles.textSpan}> {correctPercentage}% </Text>
            </Text>
          </View>

          <View style={styles.btnContainer}>
            <View style={styles.btnWrapper}>
              <Button
                color={colors.btnPrimary}
                style={styles.btnStyle}
                mode="contained"
                onPress={() => tryAgainBtnHandler()}
                >
                Try Again
              </Button>
            </View>

            <View style={styles.btnWrapper}>
              <Button
                color={colors.accent}
                style={styles.btnStyle}
                mode="contained"
                onPress={() => homeBtnHandler()}>
                Home
              </Button>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: colors.secondary
  },
  langHead: {
    fontSize: 30,
    marginVertical: '10%',
    fontFamily: 'Bitter_700Bold',
    textShadowColor: '#9da1a6',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    color: colors.btnSecondary
  },
  cardContainer: {
    width: '90%',
    height: 300,
    elevation: 10,
    marginTop: '20%',
    shadowColor: '#707371',
    borderRadius: 10,
    paddingBottom: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary
  },
  cardWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
  },
  textScore: {
    fontSize: 20,
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textSpan: {
    color: colors.btnSecondary,
    fontSize: 25
  },
  btnContainer: {
    marginTop: 30,
    width: '80%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  btnWrapper: {
    width: '45%',
  },
  btnStyle: {

    paddingVertical: 5,
    paddingHorizontal: 5
  },

})

export default SelectLanguage

