import { View, Text, StyleSheet, BackHandler, Alert } from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';
import ButtonComponent from '../components/ButtonComponent';
import colors from '../constants/colors';


const HomeScreen = ({ navigation }) => {

    //When Back Button is Pressed ---> Prompt to quit an App
    useEffect(() => {
        const backAction = () => {
          Alert.alert("Quit App", "Are you sure you want to quit?", [
            {
              text: "Cancel", 
              onPress: () => null,
              style: "cancel"
            },
            { text: "QUIT", onPress: () => BackHandler.exitApp() }
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
            <Text style={styles.textStyle}>MEGA-QUIZ</Text>
            <View style={styles.btnContainer}>
                <ButtonComponent style={styles.startButton} onPress={() => navigation.navigate('selectLanguage')}>
                    <Text style={styles.btnText}>START</Text>
                </ButtonComponent>
                <ButtonComponent style={styles.settingButton}>
                    <Text style={styles.btnText}>SETTING</Text>
                </ButtonComponent>
                <ButtonComponent style={styles.aboutButton}>
                    <Text style={styles.btnText}>ABOUT</Text>
                </ButtonComponent>
            </View>
            <StatusBar
            hidden={true}
            style="auto"
          />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: colors.primary,
    },
    textStyle: {
        top: '10%',
        color: colors.btnSecondary,
        fontSize: 50,
        fontFamily: 'Bitter_700Bold'

    },
    btnContainer: {
        top: '30%',
        padding: '5%',
        width: '80%',
        alignItems: 'center',
        backgroundColor: colors.accent,
        borderRadius: 8,

    },
    btnText: {
        color: 'white',
        fontWeight: 'bold'
    },
    startButton: {
        marginBottom: 10,
        shadowColor: '#000',
        elevation: 8,
        backgroundColor: colors.btnPrimary,
    },
    settingButton: {
        marginVertical: 10,
        shadowColor: '#000',
        elevation: 8,
        backgroundColor: colors.btnSuccess,
    },
    aboutButton: {
        marginVertical: 10,
        shadowColor: '#000',
        elevation: 8,
        backgroundColor: colors.btnSecondary,
    },
})
export default HomeScreen;