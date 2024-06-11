import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Platform,
} from 'react-native';

import styles from './signinStlye';

//import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [type, setType] = useState(false);

  function handleLogin(){
    if(type){
      //Cadastrar novo usuario
      if(name === '' || email === '' || password === '') return;
      auth().createUserWithEmailAndPassword(email,password)
      .then((user)=>{
        user.user.updateProfile({
          displayName: name
        })
        .then(() =>{
          navigation.goBack();
        })
        
      })
      .catch((error) =>{
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

      })
    }else{
      //Logar usuario
      auth()
      .signInWithEmailAndPassword(email,password)
      .then (() =>{
        navigation.goBack();
      })
      .catch((error) =>{    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

      })
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>HeyGrupos</Text>
      <Text style={styles.subTitle}>Faça Networking! </Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Digite seu nome"
        placeholderTextColor="#99999B"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Digite seu Email"
        placeholderTextColor="#99999B"
      />

      <TextInput
        style={styles.input}
        value={password}
        onChangeText={text => setPassword(text)}
        placeholder="Digite sua senha"
        placeholderTextColor="#99999B"
      />

      <TouchableOpacity style={[styles.buttonLogin, {backgroundColor: type ? '#F53745' : '#57DD86'}]} onPress={handleLogin}>
        <Text style={styles.buttonText}> {type ? "Cadastrar" : "Acessar"}</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={ () => setType(!type)}>
        <Text style={styles.buttonText}> {type ? "Já tenho uma conta" : "Criar uma nova conta"}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
