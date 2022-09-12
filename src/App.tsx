import React from 'react';
import Header from './componenets/header/Header';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from 'pages/contact/Contact';
import Projects from 'pages/projects/Projects';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
