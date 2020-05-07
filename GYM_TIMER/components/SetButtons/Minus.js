import * as React from 'react';
import { StyleSheet, View} from 'react-native';
import {default as SecondButtonMinus} from './Second/SecondMinus.js';
import {default as MinuteButtonMinus} from './Minute/MinuteMinus.js'

const Minus = (props) => {
  return(
      <View style={styles.Minus}>
          <MinuteButtonMinus minuteMinus = {() => { props.minuteMinus() }} 
                            minuteMinusLong = {() => { props.minuteMinusLong() }} 
                            minuteMinusLongOut = {() => { props.minuteMinusLongOut() }}/> 
          <SecondButtonMinus secondMinus = {() => { props.secondMinus() }} 
                            secondMinusLong = {() => { props.secondMinusLong() }} 
                            secondMinusLongOut = {() => { props.secondMinusLongOut() }}/>
      </View>
  )
}

const styles = StyleSheet.create({
    Minus: {
      flexDirection: 'row',
      justifyContent: 'center',
      height: '1%',
      marginTop: '-10%',
    },
})

export default Minus