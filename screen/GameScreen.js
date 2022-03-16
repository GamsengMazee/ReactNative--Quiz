import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert, BackHandler } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { scoreCounter } from '../store/action';
import { engQuestions, garoQuestions } from '../data/quizQuestions'
import colors from '../constants/colors';




const GameScreen = ({ route, navigation }) => {
  const { selectedLanguage } = route.params;
  const [questionCounter, setQuestionCounter] = useState(1)      //Question counter
  const [selectQuestion, setSelectQuestion] = useState(0);     // store index of an array
 

  const myScore = useSelector((state) => {
    return state.scoreState;
  })

  const dispatch = useDispatch()


  let availableQuestions = selectedLanguage === 'english' ? [...engQuestions] : [...garoQuestions];
  let currentQuestion = availableQuestions[selectQuestion]  //takes index from the state
  let numberOfQuiz = availableQuestions.length;



  const onPressChoiceHandler = (isCorrect) => {
    if (isCorrect === true) {
      dispatch(scoreCounter())   //redux score counter
    }
    setQuestionCounter(questionCounter + 1)

    if (availableQuestions.length <= questionCounter) {

      return navigation.push('scoreCard', {
        selectedLanguage,
        numberOfQuiz,
      });
    }

    setSelectQuestion(selectQuestion + 1);
  }

  //When back button is pressed
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hey!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => navigation.navigate('selectLanguage')}
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.scoreText}>
          Score: <Text style={styles.scoreNum}>{myScore}</Text>
        </Text>
      </View>
      <View style={styles.quizWrapper}>
        <View style={styles.questionWrapper}>
          <Text style={styles.questionNumber}>{questionCounter}.{' '}</Text>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>
        <View>
          {currentQuestion.answerOptions.map((data, index) => {
            return (
              <TouchableOpacity key={index} style={styles.choiceWrapper} >
                <Text
                  onPress={() => onPressChoiceHandler(data.isCorrect)}
                  style={styles.choiceText}>
                  {data.choice}
                </Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center'
  },
  scoreText: {
    color: 'white',
    top: '80%',
    fontSize: 20,
    fontFamily: 'MeriendaOne_400Regular'
  },
  scoreNum: {
    color: colors.btnSecondary,
    fontSize: 25,
  },
  quizWrapper: {
    width: '90%',
    height: '100%',
    flexWrap: 'wrap',
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionWrapper: {
    flexDirection: 'row',
    left: '10%'

  },
  questionNumber: {
    fontSize: 20,
    fontFamily: 'Bitter_400Regular',
    color: '#fff'
  },
  questionText: {
    fontSize: 20,
    fontFamily: 'Bitter_400Regular',
    color: 'white'
  },
  choiceWrapper: {
    marginVertical: 7,
    marginLeft: 8,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  choiceText: {
    backgroundColor: colors.light,
    width: '100%',
    paddingVertical: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
    paddingLeft: 10,
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    borderColor: 'red',
  },

})

export default GameScreen

