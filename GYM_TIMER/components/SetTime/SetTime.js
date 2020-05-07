import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function SetTime(props) {
  return(
    <View style = {{alignItems: props.jc, flexDirection: 'row'}}>
      <Minute minute = {props.minute} font = {props.font} minuteUp = {() => {props.minuteUp()}}/>
      <Text style = {{fontSize: props.font}}>:</Text>
      <Second second = {props.second} font = {props.font}/>
    </View>
  )
}

function Minute(props) {
  return(
    <GestureRecognizer onSwipeUp = {() => {alert()}}>
      <Text style = {{fontSize : props.font}}>{props.minute}</Text>
    </GestureRecognizer>
  );
}

const Second = (props) => {
  return(
    <Text style = {{fontSize : props.font}}>{props.second}</Text>
  )
}