import React, { Component } from 'react';
import Heading from './components/Heading/Heading.js';
import Navbar from './components/Navbar/Navbar.js';
import Profile from './components/Profile/Profile.js';
import Experiences from './components/Experiences/Experiences.js';
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
    this.updateWindowScroll = this.updateWindowScroll.bind(this);
  }


  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    window.addEventListener('scroll', this.updateWindowScroll);

    let winOffset = window.innerHeight/2;
    let currentElement = document.getElementById('profile');

    // TODO: need to find out how setState with a custom string
    if(currentElement){
      this.setState({ profileOffsetOffset: (currentElement.offsetTop +winOffset)});  
    }
    
    currentElement = document.getElementById('experiences');
    if(currentElement){
      this.setState({ experiencesOffset: (currentElement.offsetTop +winOffset)});  
    }

    currentElement = document.getElementById('abilities');
    if(currentElement){
      this.setState({ abilitiesOffset: (currentElement.offsetTop +winOffset)});  
    }

    currentElement = document.getElementById('cv');
    if(currentElement){
      this.setState({ cvOffset: (currentElement.offsetTop +winOffset)});  
    }

    currentElement = document.getElementById('projects');
    if(currentElement){
      this.setState({ projectsOffset: (currentElement.offsetTop +winOffset)});  
    }

    currentElement = document.getElementById('contact');
    if(currentElement){
      this.setState({ contactOffset: (currentElement.offsetTop +winOffset)});  
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('scroll', this.updateWindowScroll);
  }
  
  componentDidUpdate () {
    window.addEventListener('scroll', this.updateWindowScroll);
  }

  updateWindowScroll() {
    let currentBodyScroll = document.documentElement.scrollTop;
    if(currentBodyScroll > (document.getElementById("scroll-down").offsetTop+20)){
      document.body.classList.add("fixed");
    } else {
      document.body.classList.remove("fixed");
    }

    // Below is what happens when it's late at night, +20 hours of coding, and you can't get scroll spy to work with ReactJS+Bootstrap
    // AND all the reactJS solutions are super case dependant...
    if(currentBodyScroll <= this.state.profileOffsetOffset) {
      // Do nothing
    } else {
      // Remove the active from sections
      let sections = ['profile','experiences','abilities','cv','projects','contact'];
      for(let i = 0; i < sections.length; i++) {
        document.getElementById(sections[i] + "Spy").classList.remove("active");
      }

      if(currentBodyScroll > this.state.profileOffsetOffset && currentBodyScroll <= this.state.experiencesOffset) {
        document.getElementById("profileSpy").classList.add("active");
      } else if(currentBodyScroll > this.state.experiencesOffset && currentBodyScroll <= this.state.abilitiesOffset) {
        document.getElementById("experiencesSpy").classList.add("active");
      } else if(currentBodyScroll > this.state.abilitiesOffset && currentBodyScroll <= this.state.cvOffset) {
        document.getElementById("abilitiesSpy").classList.add("active");
      } else if(currentBodyScroll > this.state.cvOffset && currentBodyScroll <= this.state.projectsOffset) {
        document.getElementById("cvSpy").classList.add("active");
      } else if(currentBodyScroll > this.state.projectsOffset && currentBodyScroll <= this.state.contactOffset) {
        document.getElementById("projectsSpy").classList.add("active");
      } else if(currentBodyScroll > this.state.contactOffset) {
        document.getElementById("contactSpy").classList.add("active");
      }
    }
    

    

    // let scrollSpySectionsOffset = [];
    // for (let i = 0; i < scrollSpySections.length; i++) {
    //   let currentOffsetTop = scrollSpySections[i].offsetTop - 16;
      
    //   if (!scrollSpySectionsOffset.includes(currentOffsetTop)) {
    //     scrollSpySectionsOffset.push(currentOffsetTop);
    //   }
    // }

    // for (let i = 0; i < scrollSpySectionsOffset.length; i++) {
    //   if (document.scrollTop > scrollSpySectionsOffset[i]) {
    //     if (document.scrollTop > scrollSpySectionsOffset[i+1]) {
    //     } else {
    //       this.setState({active: i+1});
    //     }
    //   }
    // }
    
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
        <Contact/>
      </div>
    );
  }
}

export default App;
