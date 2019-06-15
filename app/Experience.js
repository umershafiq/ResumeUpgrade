import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Accordion } from "native-base";
import { Actions } from 'react-native-router-flux'; // New code
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];

const Experience = () => {
  return (
    <View style={styles.container}>
     <Container>
        <Header />
        <Content padder>
          <Accordion
            dataArray={dataArray}
            icon="add"
            expandedIcon="remove"
            iconStyle={{ color: "green" }}
            expandedIconStyle={{ color: "red" }}
          />
        </Content>
      </Container>
      <Text
        style={styles.welcome}
        onPress={() => Actions.education()} // New Code
      >
        See Education
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
});

export default Experience;