// app/ScarletScreen.js

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code

const Objective = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.welcome}>
    I am looking for a suitable position that can offer me new experiences and growth potential to utilize my
skills and play an effective part in the development of the organization.
    </Text>
      <Text
        style={styles.welcome}
        onPress={() => Actions.experience()} // New Code
      >
        See Experiences
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    
  },
});

export default Objective;