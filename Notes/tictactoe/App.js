import React, {Component} from 'react';
//import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Alert, TouchableOpacity } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.text}>TODO</Text>
      <MenuProvider>
        <TODO/>
      </MenuProvider>
    </View>
  );
}

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

export class TODO extends Component
{
  constructor()
  {
    super();
    this.state = 
    {
        todo : [
          {key : 'Homework'},
          {key : 'Gym'},
        ],
        addTODO: false,
    }
  }

  handleClick()
  {
    let addTODO = this.state.addTODO
    this.setState({
      addTODO : !addTODO
    })
  }

  handleLongClick(index)
  {
    Alert.alert('Delete?', 'It will be deleted',[{text: 'Cansel', style: 'cansel'},
     {text: 'Ok', onPress : () => 
      {
        let todo1 = this.state.todo.slice()
        todo1.splice(index, 1)

        this.setState({
        todo: todo1
        })
      }
    }], {canceleble : 'fasle'})
  }

  handleSubmitEditing(text)
  {
    alert(text)
    let todo1 = this.state.todo.slice()
    todo1.push({key : text})
    this.setState({
      todo : todo1
    })
  }
  render()
  {
    return(
      <View style = {styles.container}>
        {this.state.addTODO && <TextInput style = {styles.input} onSubmitEditing ={(text) => this.handleSubmitEditing(text)}/>}
        <FlatList style = {{width: '100%'}} data = {this.state.todo} renderItem={({item, index}) => <Text style={styles.item} onLongPress = {() => this.handleLongClick(index)}>{item.key}</Text>}/>
        <TouchableOpacity style={styles.button} onPress = {() => {this.handleClick()}}>
          <Text style={styles.buttonTxt}>{this.state.addTODO ? 'Cansel' : 'ADD TODO'}</Text>
        </TouchableOpacity>
        <Menu>
          <MenuTrigger text='Select action' />
          <MenuOptions>
            <MenuOption onSelect={() => alert(`Save`)} text='Save' />
            <MenuOption onSelect={() => alert(`Delete`)} >
              <Text style={{ color: 'red' }}>Delete</Text>
            </MenuOption>
            <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
          </MenuOptions>
        </Menu>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    width: '100%',
  },
  item: {
    padding: 10,
    fontSize: 24,
    height: 60,
    width: '100%',
    backgroundColor: '#18d6c0',
    textAlign: 'center',
    marginTop: 5,
    borderRadius: 15
  },
  button : {
    backgroundColor: 'red',
    width: '90%',
    height: '10%',
    justifyContent: 'center',
    marginBottom: 20,
    borderRadius: 30,
    backgroundColor: '#d9bd34',
  },
  buttonTxt :
  {
    textAlign: 'center',
    fontSize: 50,
    color: '#63878f',
  },
  input : {
     height: 100, 
     width: '100%',
     alignContent: 'center',
     justifyContent: 'center',
     backgroundColor: 'white',
     borderRadius: 15,
     fontSize: 30,
  },

  text: {
    fontSize: 50,
    backgroundColor: 'cyan',
    color: "black",
    textAlign: 'center',
    marginTop: 40,
  }
});