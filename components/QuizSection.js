import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react';
import colors from '../constants/colors';

const QuizSection = (props) => {
  return (
    <View style={styles.container}>
    <View style={styles.quizWrapper}>
      <View style={styles.questionWrapper}>
        <Text style={styles.questionNumber}>1.{' '}</Text>
        <Text style={styles.questionText}>{props.question}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.choiceWrapper} onPress={ props.onPress1}>
          <Text style={styles.choiceNumber}>a)</Text>
          <Text style={styles.choiceText}>{props.choice1}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceWrapper} onPress={ props.onPress2}>
          <Text style={styles.choiceNumber}>b)</Text>
          <Text style={styles.choiceText}>{props.choice2}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceWrapper} onPress={ props.onPress3}>
          <Text style={styles.choiceNumber}>c)</Text>
          <Text style={styles.choiceText}>{props.choice3}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.choiceWrapper} onPress={ props.onPress4}>
          <Text style={styles.choiceNumber}>d)</Text>
          <Text style={styles.choiceText}>{props.choice4}</Text>
        </TouchableOpacity>
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
    },
    quizWrapper: {
      width: '80%',
      height: '100%',
      flexWrap: 'wrap',
      top: '30%',
      paddingVertical: 5 ,
  
    },
    questionWrapper: {
      flexDirection: 'row',
  
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
      // backgroundColor: '#ffcd38',
      padding: 10,
      alignItems: 'center',
    },
    choiceNumber: {
      padding: 10,
      backgroundColor: colors.secondary,
      color: '#fff',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
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
      fontWeight: '500'
    },
  
  })

export default QuizSection

