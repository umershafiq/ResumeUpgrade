import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Objective from './Objective';
import Experience from './Experience';
import Education from './Education';

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="objective"
          component={Objective}
          title="Objective"
          initial
        />
        <Scene
          key="experience"
          component={Experience}
          title="Experience"
        />
        <Scene
          key="education"
          component={Education}
          title="Education"
        />
      </Scene>
      
    </Router>
  );
}

export default App;