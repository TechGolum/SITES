import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class MinuteButtonMinus extends React.Component {
render()
{
  return(
    <TouchableOpacity style = {styles.minutebuttonminus} onPressOut = {() => {this.props.minuteMinusLongOut()}} onPress = {() => {this.props.minuteMinus()}} onLongPress = {() => {this.props.minuteMinusLong()}}>
      <Text style = {{fontSize: 40, marginBottom: '20%'}}>↓</Text>
    </TouchableOpacity>
  )
}
}

const styles = StyleSheet.create({
  minutebuttonminus: {
    marginRight: '1%',
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
})