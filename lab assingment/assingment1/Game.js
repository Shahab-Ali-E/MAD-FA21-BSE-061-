import {Text , Button, TextInput, View } from 'react-native';
import React from 'react';
import GameStyle from '../Style/GameStyle';
import LoginStyle from '../Style/LoginStyle';

const Game = ()=>{
 return (
  <View style={LoginStyle.view}>
    <Text style={LoginStyle.LoginTitle}>Game of throns</Text>
    <TextInput 
      style={LoginStyle.input}
      placeholder="Enter your Age"
      keyboardType = 'number-pad'
    />
  </View>
 );
}

export default Game;