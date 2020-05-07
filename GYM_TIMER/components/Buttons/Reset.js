import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Reset extends React.Component {
  render = () => {
    return(
      <View style={styles.reset} onTouchStart={() => { this.handleTouch() }}>
        <Text style={{fontSize: 40}}>RESET</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
      reset : {
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    marginTop: '100%',
  },
})