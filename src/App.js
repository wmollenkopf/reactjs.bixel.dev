import React, { Component } from 'react';
import Heading from './components/Heading/Heading.js';
import Profile from './components/Profile/Profile.js';
// import Experiences from './components/Experiences/Experiences.js';
import Abilities from './components/Abilities/Abilities.js';
import Projects from './components/Projects/Projects.js';
import Contact from './components/Contact/Contact.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  height: props.height,
                  width: props.width,
                  profileOffset: 0,
                  experiencesOffset: 0,
                  abilitiesOffset: 0,
                  cvOffset: 0,
                  projectsOffset: 0,
                  contactOffset: 0,
                };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight});
    
  }

  render() {
    return (
      <div className="App">
        <Heading viewportHeight={this.state.height}/>
        {/* <Navibar/> */}
        <Profile backgroundClass="background-snowwhite" />
        {/* <Experiences backgroundClass="background-snowblue" /> */}
        <Abilities backgroundClass="background-snowblue" />
        <Projects backgroundClass="background-snowwhite" />
        <Contact backgroundClass="background-gray" />
      </div>
    );
  }
}

export default App;
