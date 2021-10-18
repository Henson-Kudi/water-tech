import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Footer from './components/Footer'
import Services from './components/Services';
import Projects from './components/Projects'
import SingleProject from './components/SingleProject';
import About from './components/About'

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <HomePage/>
          </Route>

          <Route path="/services" exact>
            <Services/>
          </Route>

          <Route path="/projects" exact>
            <Projects/>
          </Route>

          <Route path="/about" exact>
            <About/>
          </Route>

          <Route path="/projects/:projectId" exact>
            <SingleProject/>
          </Route>

          <Footer/>
      
        </Switch>
      </div>
    </Router>
  );
}

export default App;
