import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {default as Bottom} from './Bottom'
import {default as Exersise} from './Exersises'
import {default as ALERT } from './Dialog'

export default class Gym extends React.Component{

    state = {
        i : 0,
        i_copy: 0,
        exersises: [],
        visible : false,
    }
    ar = []
    text = []
    i = 0
    handlePress()
    {
        this.setState({visible: true})
    }
    handleInput(x)
    {
        this.setState({visible: false})
        if(x != '') 
        {
            this.text[this.i] = x.slice(0, 13)
            this.ar[this.i] = <Exersise m = '01' s = '00' exersise = {this.text[this.i]} textFont = {30} timeFont = {30} changeText = {() => {this.onChangeText(this.i)}}/>
            this.setState({exersises: this.ar.slice(), i : this.i + 1})
            this.i = this.state.i
        }
    }
    onChangeText(x)
    {
        this.setState({visible: true})
        this.i = x
    }
    render(){
        return(
            <View style = {styles.container}>
                <TouchableOpacity style = {styles.button} onPress = {() => {this.handlePress()}}>
                    <Text style ={{fontSize: 40, textAlign: 'center', marginBottom: '-70%'}}>+</Text>
                </TouchableOpacity>
                <ALERT visible = {this.state.visible} handleInput = {(x) => {this.handleInput(x)}}/>
                <SafeAreaView style = {styles.exersises}>
                    <ScrollView style = {{width: '100%', height: '10%', backgroundColor: 'pink', marginTop : '40%'}}>
                        {this.state.exersises}
                    </ScrollView>
                </SafeAreaView>
                <Bottom Timer = {() => {this.props.navigation.navigate('Timer')}} Gym = {() => {}} Settings = {() => {this.props.navigation.navigate('Settings')}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        height: "100%",
  },
  button:{
      height: 40,
      width: 40,
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 40,
      justifyContent: 'center',
      marginTop: '10%'
  },
  exersises : {
        height: '100%',
        width: '90%',
        position: 'absolute',   
  }
})