import React, {useState} from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {
  const [textToSpeak, setTextToSpeak] = useState('');
  const speak = () => {
    Speech.speak(textToSpeak);
  };

  return (
     <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Enter text'
        onChangeText={text => setTextToSpeak(text)} value={textToSpeak}
      />

    <View style={styles.container}>
      <Button title="Press to hear some words" onPress={speak} />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    marginTop: 100,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  },
});