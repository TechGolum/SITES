import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class SecondButtonPlus extends React.Component {
render()
{
  return(
    <TouchableOpacity onPress = {() => {this.props.secondPlus()}} 
                      onLongPress = {() => {this.props.secondPlusLong()}} 
                      onPressOut = {() => {this.props.secondPlusLongOut()}}style = {styles.secondbuttonplus}>
      <Text style = {{fontSize: 40, marginBottom: '20%'}}>↑</Text>
    </TouchableOpacity>
  )
}
}

const styles = StyleSheet.create({
  secondbuttonplus: {
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