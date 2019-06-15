import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Accordion } from "native-base";
import { Actions } from 'react-native-router-flux'; // New code
const dataArray = [
    { title: "Freelance Web Content Writer", content: "|Health Television, Aug, 2017- Apr 2018" },
    { title: "Internee, Front-end Development", content: "|Protégé Global, June 2018 - Aug 2018" },
    { title: "WordPress Developer", content: "|Grand Store, Aug, 2018 - Present" }
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
