import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Start extends React.Component{

  state = {
    text: "START"
  }

  render = () =>
  { 
    return(
      <View style = {styles.start} onTouchStart = {() => { this.props.nav(); this.props.startFalse();}}>
        <Text style = {{fontSize: 50}}>{this.state.text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    start: {
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})