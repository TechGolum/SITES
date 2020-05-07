import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {default as Bottom} from './Bottom'

export default class Settings extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                </Text>
                <Bottom Timer = {() => {this.props.navigation.navigate('Timer')}} Gym = {() => {this.props.navigation.navigate('Gym')}} Settings = {() => {}}/>
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
    }
})