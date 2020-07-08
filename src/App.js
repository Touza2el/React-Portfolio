import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

class App extends Component {
  constructor() {
    super();
    this.state = {
      onScroll: false,
    };
  }
  componentDidMount = () => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        this.setState({ onScroll: true });
      } else {
        this.setState({ onScroll: false });
      }
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header onscroll={this.state.onScroll} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/services" component={Services} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
