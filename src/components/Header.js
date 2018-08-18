import React from 'react';
import FaGithub from 'react-icons/lib/fa/github';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import { Navbar, NavItem, Tabs, Tab } from 'react-materialize';
import About from './About';
import Currently from './Currently';
import Experience from './Experience';
import Projects from './Projects';
import Contact from './Contact';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar
          brand="Aditya Srivastava"
          className="blue lighten-2 black-text"
          right
        >
          <NavItem href="mailto:aditya.srivastava@berkeley.edu" id="email">
            aditya [dot] srivastava [at] berkeley [dot] edu
          </NavItem>
          <NavItem href="https://github.com/indianwolverine">
            <FaGithub className="icon" />
          </NavItem>
          <NavItem href="https://www.linkedin.com/in/aditya-srivastava/">
            <FaLinkedinSquare className="icon icon-right" />
          </NavItem>
        </Navbar>
        <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
          <Tab title="About" active>
            <About />
          </Tab>

          <Tab title="Currently">
            <Currently />
          </Tab>

          <Tab title="Experience">
            <Experience />
          </Tab>

          <Tab title="Projects">
            <Projects />
          </Tab>

          <Tab title="Contact Me">
            <Contact />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default Header;
