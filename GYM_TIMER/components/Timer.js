import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { default as SetTime } from './SetTime/SetTime';
import { default as Minus } from './SetButtons/Minus'
import { default as Plus } from './SetButtons/Plus';
import { default as Start } from './Buttons/Start'
import { default as Reset } from './Buttons/Reset'
import {default as Bottom} from './Bottom'

export default class Timer extends React.Component {
    state = {
      minute: "01",
      second: "00",
      m: 1,
      s: 0,
      start: false,
    }
    interval = null
    render()
    {

    const { navigate } = this.props.navigation;
    return(
      <View style={styles.container}>
        <Plus minutePlus = {this.minutePlus.bind(this)} 
              minutePlusLong = {() => {this.interval = setInterval(() => {this.minutePlus()}, 200)}} 
              minutePlusLongOut = {() => {clearInterval(this.interval)}}
              secondPlus = {this.secondPlus.bind(this)}
              secondPlusLong = {() => {this.interval = setInterval(() => {this.secondPlus()}, 200)}}
              secondPlusLongOut = {() => {clearInterval(this.interval)}} />
        <SetTime minute = {this.state.minute} second = {this.state.second} font = {60}/>
        <Minus minuteMinus = {this.minuteMinus.bind(this)} 
              minuteMinusLong = {() => {this.interval = setInterval(() => {this.minuteMinus()}, 200)}} 
              minuteMinusLongOut = {() => {clearInterval(this.interval)}}
              secondMinus = {this.secondMinus.bind(this)}
              secondMinusLong = {() => {this.interval = setInterval(() => {this.secondMinus()}, 200)}}
              secondMinusLongOut = {() => {clearInterval(this.interval)}} />
        <Start nav = {() => {if(!this.state.start) navigate('Time', {minute: this.state.m, second: this.state.s})}} startFalse = {() => {this.state.start = false}}/>
        {/* <Reset /> */}
        <Bottom Timer = {() => {}} Gym = {() => {navigate('Gym')}} Settings = {() => {navigate('Settings')}}/>
      </View>
    )
  }

    minutePlus() {
      if(this.state.m < 59)
      {
        if(this.state.m >= 9) this.setState({minute: ++this.state.m})
        else this.setState({ minute: "0" + ++this.state.m })
      }
    }

    secondPlus() {
      if(this.state.s < 59)
      {
        if (this.state.s >= 9) this.setState({ second: ++this.state.s })
        else this.setState({ second: "0" + ++this.state.s })
      }
    }

    minuteMinus() {
      if(this.state.m > 0)
      {
        if (this.state.m >= 11) this.setState({ minute: --this.state.m })
        else this.setState({ minute: "0" + --this.state.m })
      }
    }

    secondMinus() {
      if(this.state.s > 0)
      {
        if (this.state.s >= 11) this.setState({ second: --this.state.s })
        else this.setState({ second: "0" + --this.state.s })
      }
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
});