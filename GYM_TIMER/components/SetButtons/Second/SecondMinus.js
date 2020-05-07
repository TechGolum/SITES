import * as React from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class SecondButtonMinus extends React.Component {
render()
{
  return(
    <TouchableOpacity onPress = {() => {this.props.secondMinus()}} 
                      onLongPress = {() => {this.props.secondMinusLong()}} 
                      onPressOut = {() => {this.props.secondMinusLongOut()}}
                      style = {styles.secondbuttonminus}> 
      <Text style = {{fontSize: 40, marginBottom: '20%'}}>↓</Text>
    </TouchableOpacity>
  )
}
}

const styles = StyleSheet.create({
  secondbuttonminus : {
    marginLeft: '12%',
    width: 40,
    height: 40,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
})