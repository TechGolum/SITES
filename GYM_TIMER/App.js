import * as React from 'react';
import { NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { default as Time } from './components/Time'
import { default as Timer } from './components/Timer'
import {default as Gym} from './components/Gym'
import {default as Settings} from './components/Settings'
import { View } from 'react-native';
const Stack = createStackNavigator()


export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Timer" component={Timer} />
        <Stack.Screen name="Time" component={Time} options = {{animationEnabled : false}}/> 
        <Stack.Screen name="Gym" component={Gym} options = {{headerLeft: () => {<View></View>} , animationEnabled : false}}/>
  <Stack.Screen name="Settings" component={Settings} options = {{headerLeft: () => {<View></View>}, animationEnabled : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

