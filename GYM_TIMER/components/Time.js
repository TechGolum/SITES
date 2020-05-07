import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Time extends React.Component {

  state = {
    minute : '00',
    m : 0,
    second : '00',
    s: 0,
    start : false,
    pause: false,
  }

  handleInterval()
  {
    if (this.state.m == 0 && this.state.s > 0 || this.state.m > 0 && this.state.s >= 0)
      {
        if (this.state.s == 0)
        {
          if(this.state.m <= 9) this.setState({minute: "0" + --this.state.m}) 
          else this.setState({minute: --this.state.m})
          this.setState({second: "59", s: 60})
        }

        if(this.state.s <= 10) this.setState({second: "0" + --this.state.s}) 
        else this.setState({second: --this.state.s})
      }
  }
  i = setInterval(() => {this.handleInterval()}, 1000)

  handleTouch()
  {
    if(!this.state.pause)
    {
      this.setState({pause: true})
      clearInterval(this.i)
    }
    else
    {
      this.setState({pause: false})
      this.i = setInterval(() => {this.handleInterval()}, 1000)
    }
  }
  render()
  {
    if(!this.state.start)
    {
      this.setState({ m: this.props.route.params.minute, 
                      s: this.props.route.params.second, 
                      start: true, 
                      minute: this.props.route.params.minute > 9 ? this.props.route.params.minute: '0' + this.props.route.params.minute, 
                      second: this.props.route.params.second > 9 ? this.props.route.params.second : '0' + this.props.route.params.second})
    }
    return(
      <View style = {styles.time} onTouchStart = {() => {this.handleTouch()}}>
        <Text style = {{fontSize: 90}}>
          {this.state.minute}:{this.state.second}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    time: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    }
});