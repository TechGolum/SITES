import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {default as SecondButtonPlus} from './Second/SecondPlus.js'
import {default as MinuteButtonPlus} from './Minute/MinutePlus.js'

function Plus(props) {
  return(

    <View style={styles.Plus}>
        <MinuteButtonPlus   minutePlus = {() => { props.minutePlus() }} 
                            minutePlusLong = {() => { props.minutePlusLong() }} 
                            minutePlusLongOut = {() => { props.minutePlusLongOut()}}/>
        <SecondButtonPlus   secondPlus = {() => { props.secondPlus() }} 
                            secondPlusLong = {() => { props.secondPlusLong() }} 
                            secondPlusLongOut = {() => { props.secondPlusLongOut()}}/>
    </View>
  )
}

const styles = StyleSheet.create({
    Plus: {
        flexDirection: 'row',
        justifyContent: 'center',
        height: '0%',
        marginTop: '40%',
    },
})

export default Plus