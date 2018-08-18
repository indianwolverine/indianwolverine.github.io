import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Currently from "./Currently";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/about" component={About} />
            <Route exact path="/currently" component={Currently} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/contact" component={Contact} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
