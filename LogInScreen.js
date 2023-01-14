import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const LoginScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPage, setShowPage] = useState(false);

  const handleSubmit = () => {
    if (name !== '' && username !== '' && password !== '') {
      setShowPage(true);
    }
  };

  if (showPage) {
    return (
      <View>
        <Text>Welcome to the blank page</Text>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>Log In</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          onChangeText={text => setName(text)}
          value={name}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your username"
          onChangeText={text => setUsername(text)}
          value={username}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#e3d3b3'
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: '#776d63',
    padding: 10,
    margin: 10,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  input: {
    height: 40,
    color: '#776d63',
  },
  buttonContainer: {
    width: '80%',
    borderColor: '#776d63',
    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 10,
  },
});

export default LoginScreen;
