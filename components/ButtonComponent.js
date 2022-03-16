import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'

const ButtonComponent = (props) => {
    return (
        <TouchableOpacity activeOpacity={0.7} style={{ ...styles.btnStyle, ...props.style }} onPress={props.onPress}>
            <Text style={styles.textHead}>{props.children}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        width: '50%',
        padding: 18,
        alignItems: 'center',
        borderRadius: 10,
        
    },
    textHead: {
        fontSize: 20,
        letterSpacing: 2,
        fontFamily: 'MeriendaOne_400Regular',
    },
})
export default ButtonComponent

