// Make Phone Call, Send SMS or Email Using React Native Communication

// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

// 1. Either import the whole module
import Communications from 'react-native-communications';
/* 2. Or import single methods
 import {
  phonecall,
  email,
  text,
  web
} from 'react-native-communications';*/

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Make Phone Call, Send SMS or Email Using React Native Communication
        </Text>
        {/* Call: phonecall(phoneNumber, prompt) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.phonecall('01726066606', true)}>
          <Text style={styles.buttonTextStyle}>Make Phone Call</Text>
        </TouchableOpacity>
        {/* Mail: email(to, cc, bcc, subject, body) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
            Communications.email(
              ['pmdev71@gmail.com', 'ceo@devekattor.com'],
              null,
              null,
              'Subject',
              'Content for the mail body',
            )
          }>
          <Text style={styles.buttonTextStyle}>Send an Email</Text>
        </TouchableOpacity>
        {/* SMS: text(phoneNumber = null, body = null) */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() =>
            Communications.text(
              '01726066606',
              'Follow us https://devEkattor.com',
            )
          }>
          <Text style={styles.buttonTextStyle}>Send a Text/iMessage</Text>
        </TouchableOpacity>
        {/* Web: web(address = null)*/}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={() => Communications.web('https://devEkattor.com')}>
          <Text style={styles.buttonTextStyle}>Open AboutReact</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  titleText: {
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 15,
    padding: 10,
    backgroundColor: '#8ad24e',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
