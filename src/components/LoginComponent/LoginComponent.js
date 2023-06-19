import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet, Text } from 'react-native';

const LoginComponent = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 's3cr3t0') {
      Alert.alert('Login successful', '', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
      console.log("te has logueado");
      //navigation.navigate('VideoCallScreen'); // Navega al componente 'VideoCallScreen'
    } else {
      Alert.alert('Invalid credentials', '', [{ text: 'OK', onPress: () => console.log('OK Pressed') }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={handleLogin} color="#f4511e" />
        <Button title="Register" onPress={() => navigation.navigate('Register')} color="#e67e22" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#e74c3c',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default LoginComponent;
