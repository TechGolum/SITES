import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class MinuteButtonPlus extends React.Component {
render()
{
  return(
    <TouchableOpacity onPress = {() => {this.props.minutePlus()}} 
                      onLongPress = {() => {this.props.minutePlusLong()}} 
                      onPressOut = {() => {this.props.minutePlusLongOut()}} style = {styles.minutebuttonplus}>
      <Text style = {{fontSize: 40, marginBottom: '20%'}}>↑</Text>
    </TouchableOpacity>
  )
}
}

const styles = StyleSheet.create({
  minutebuttonplus: {
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