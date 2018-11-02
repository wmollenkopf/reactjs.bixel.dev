import React, { Component } from 'react';
import Heading from './components/Heading/Heading.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import './App.css';

        // <Experiences/>
        // <Abilities/>
        // <Projects/>
        // <Contact/>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {height: props.height,width: props.width};
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
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="App">
        <Heading viewportHeight={this.state.height}/>
        <Navbar/>
        <Profile/>
      </div>
    );
  }
}

export default App;
