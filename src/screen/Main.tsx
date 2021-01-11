import React, { useState } from 'react';
import {
  Pressable,
  Keyboard,
  View,
  StyleSheet,
  Text,
  Dimensions,
} from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';

const win = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
    width: win.width,
    height: win.height,
    backgroundColor: '#fff',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 200,
  },
  textInput: {
    width: 100,
    textAlign: 'center',
  },
  button: {
    width: 200,
    marginLeft: 105,
  },
});

export const Main: React.FC = () => {
  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');

  const [isEdit, setIsEdit] = useState(false);

  const visibleHour = () => {
    if (!Number.isInteger(hour)) {
      return false;
    }
    const convertedHour = Number.parseInt(hour);
    if (0 > convertedHour || convertedHour > 24) {
      return false;
    }
    return true;
  };
  return (
    <Pressable style={styles.screen} onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View>
          <TextInput
            label="hour"
            value={hour}
            onChangeText={(inputHour) => setHour(inputHour)}
            style={styles.textInput}
            editable={isEdit}
            blurOnSubmit={true}
          />
          <HelperText type="error" visible={visibleHour()}>
            数値で入力してください
          </HelperText>
        </View>
        <Text>:</Text>
        <TextInput
          label="minute"
          value={minute}
          onChangeText={(inputMinute) => setMinute(inputMinute)}
          style={styles.textInput}
          editable={isEdit}
        />
        <Text>:</Text>
        <TextInput
          label="second"
          value={second}
          onChangeText={(inputSecond) => setSecond(inputSecond)}
          style={styles.textInput}
          editable={isEdit}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        {isEdit ? (
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => {
              setIsEdit(false);
              Keyboard.dismiss();
            }}
          >
            Confirme
          </Button>
        ) : (
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => setIsEdit(true)}
          >
            Edit
          </Button>
        )}
      </View>
    </Pressable>
  );
};
