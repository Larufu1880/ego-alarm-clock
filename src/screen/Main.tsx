import React, { useState } from 'react';
import {
  Pressable,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import { TextInput } from 'react-native-paper';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textInput: {
    width: 100,
    textAlign: 'center',
  },
});

export const Main: React.FC = () => {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  return (
    <Pressable style={styles.container} onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView style={{ flexDirection: 'row' }}>
        <TextInput
          label="hour"
          value={hour}
          onChangeText={(inputHour) => setHour(inputHour)}
          style={styles.textInput}
        />
        <Text>:</Text>
        <TextInput
          label="minute"
          value={minute}
          onChangeText={(inputMinute) => setMinute(inputMinute)}
          style={styles.textInput}
        />
        <Text>:</Text>
        <TextInput
          label="second"
          value={second}
          onChangeText={(inputSecond) => setSecond(inputSecond)}
          style={styles.textInput}
        />
      </KeyboardAvoidingView>
    </Pressable>
  );
};
