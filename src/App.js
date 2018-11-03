import React, { Component } from 'react';
import Heading from './components/Heading/Heading.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Experiences from './components/Experiences/Experiences.js';
import Abilities from './components/Abilities/Abilities.js';
import Projects from './components/Projects/Projects.js';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  height: props.height,
                  width: props.width,
                };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.updateWindowScroll = this.updateWindowScroll.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.updateWindowDimensions);
  }
  
  componentDidUpdate () {
    window.addEventListener('scroll', this.updateWindowScroll);
  }

  updateWindowScroll() {
    if(document.documentElement.scrollTop > (document.getElementById("scroll-down").offsetTop+20)){
      document.body.classList.add("fixed");
    } else {
      document.body.classList.remove("fixed");
    }
    
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight});
  }

  render() {
    return (
      <div className="App">
        <Heading viewportHeight={this.state.height}/>
        <Navbar/>
        <Profile/>
        <Experiences/>
        <Abilities/>
        <Projects/>
      </div>
    );
  }
}

export default App;
