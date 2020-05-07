import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {default as SetTime} from './SetTime/SetTime'

export default function Exersises(props)
{
    return(
        <View style = {styles.container}>
            <Text style = {{fontSize: props.textFont}} onPress = {() => {props.changeText()}}>{props.exersise}</Text>
            <SetTime minute = {props.m} second = {props.s} font = {props.timeFont}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})