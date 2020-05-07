import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
//import {default as Timer } from './Timer.js'

export default class Bottom extends React.Component
{
render()
{
    return(
        <View style = {styles.container}>
            <View style = {{flex: 1, alignItems: 'center'}} onTouchStart = {() => {this.props.Timer()}}>
                <Text style = {{fontSize: 30}}>⏰</Text>
            </View>
            <View style = {{flex:1, alignItems: 'center'}} onTouchStart = {() => {this.props.Gym()}}>
                <Text style = {{fontSize: 30}}>🏁</Text>
            </View>
            <View style = {{flex:1, alignItems: 'center'}} onTouchStart = {() => {this.props.Settings()}}>
                <Text style = {{fontSize: 30}}>⚙</Text>
            </View>
        </View>
    )
}
}
const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        //backgroundColor: 'white'
    }
})