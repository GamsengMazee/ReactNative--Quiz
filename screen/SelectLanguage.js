import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RadioButton } from 'react-native-paper';
import { Button } from 'react-native-paper';

const SelectLanguage = ({ navigation }) => {
    const [language, setLanguage] = useState('')   //store language choosen  by user

    
    const langButtonHandler = () => {    
        if(language === ''){
            return;
        }else {
        return navigation.navigate('gamescreen', {
                selectedLanguage: language,
        })
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.langHead}>Select Language</Text>
            <View style={styles.cardContainer}>
                <View style={styles.cardWrapper}>
                    <View style={styles.radioContainerGaro}>
                        <RadioButton
                            value="garo"
                            status={language === 'garo' ? 'checked' : 'unchecked'}
                            onPress={() => setLanguage('garo')}
                        />
                        <Text style={styles.textGaro}>Garo</Text>
                    </View>
                    <View style={styles.radioContainerEnglish}>
                        <RadioButton
                            value="english"
                            status={language === 'english' ? 'checked' : 'unchecked'}
                            onPress={() => setLanguage('english')}
                        />
                        <Text style={styles.textEnglish}>English</Text>
                    </View>
                    <View style={styles.btnContainer}>
                        <Button
                            style={styles.btnStyle}
                            
                            mode="contained" 
                            onPress={langButtonHandler}>
                            Select
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%'
    },
    langHead: {
        fontSize: 30,
        marginVertical: '10%',
        fontWeight: 'bold',
        textShadowColor: '#9da1a6',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
    },
    cardContainer: {
        width: '90%',
        height: 300,
        elevation: 10,
        shadowColor: '#707371',
        borderRadius: 10,
        paddingBottom: '20%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardWrapper: {
        alignItems: 'flex-start'
    },
    radioContainerGaro: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30%',
    },
    radioContainerEnglish: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%'

    },
    textGaro: {
        fontSize: 20,
    },
    textEnglish: {
        fontSize: 20,
    },
    btnContainer: {
        marginTop: 25,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnStyle: {
        paddingVertical: 8,
        paddingHorizontal: 8
    },

})

export default SelectLanguage

