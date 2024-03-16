import {
    Text,
    TextInput,
    Button,
    View,
    Alert,
    TouchableOpacity,
  } from 'react-native';
import React from 'react';
import LoginStyle from '../Style/LoginStyle';
import { useState } from 'react';

const Login = ()=>{
    const [userName , setUserName] = useState('');
    const [password , setPassword] = useState('');
    const [buttonDisable , setButtonDisable] = useState(true);
    //check for credential
    let checkCredential = ()=>{
      if (userName =='cspeople' && password == 'computerscience'){
          Alert.alert("Login successful !");
      }
    };
    //handle the user name 
    let handleUserName = (text)=>{
      setUserName(text);
      setButtonDisable(!(text === 'cspeople' && password === 'computerscience'))
    }
    //handle the password
    let handlePassword = (text)=>{
      setPassword(text)
      setButtonDisable(!(userName === 'cspeople' && text === 'computerscience'))
    }
return(
  <View style={LoginStyle.view}>
    <Text style = {LoginStyle.LoginTitle} >Login</Text>
    <TextInput style = {LoginStyle.input} 
    placeholder='Username' 
    onChangeText={handleUserName}/>
    <TextInput  style = { LoginStyle.input} 
    placeholder='password'
    onChangeText = {handlePassword}/>
    <TouchableOpacity      
      disabled = {buttonDisable}
      onPress={checkCredential}>
      <Text style = {LoginStyle.button}>Login</Text>
    </TouchableOpacity>
  </View>
);
}

export default Login;
