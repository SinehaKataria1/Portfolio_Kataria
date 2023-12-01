import { Switch,Route } from "react-router-dom"
import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Education from "./Education"
import Certificates from './Certificates'
import Projects from './Projects'
import Services from './Services'
import Blogs from './Blogs'
import Contact from './Contact'
import Navigation from "./Navigation"
function Routing() {
  console.log('Rendering Routing component...');
  return (
        <>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/skills" component={Skills}></Route>
            <Route exact path="/certificate" component={Education}></Route>
            <Route exact path="/education" component={Education}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/blogs" component={Blogs}></Route>
            <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        </>

  )
}

export default Routing