import * as React from 'react';
import { View, ProgressBarAndroid } from 'react-native';
import Dialog from "react-native-dialog";
import {default as SetTime} from './SetTime/SetTime'

export default class ALERT extends React.Component {
    state = {
        text: ''
    }
    render () {
    return (
      <View>
        <Dialog.Container visible = {this.props.visible}>
          <Dialog.Title>Exersise</Dialog.Title>
          <Dialog.Input onChangeText = {(input) => {this.setState({text: input})}} style = {{borderColor: 'green', borderWidth: 1}} type = 'range'/>
          <SetTime minute = '01' second = '00' font = {25} jc = 'center' minuteUp = {() => {alert()}}/> 
          <Dialog.Button label="Cancel" onPress = {() => { this.props.handleInput(''); }}/>
          <Dialog.Button label="Ok" onPress = {() => { this.props.handleInput(this.state.text) }}/>
        </Dialog.Container>
      </View>
    )
  }
}