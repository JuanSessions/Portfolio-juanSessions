import React from 'react'
import { Route, Switch  } from "react-router-dom";
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Video from './components/Video';
import Videos from './components/Video';


function routes() {
    return (
        <Switch>
            <Route exact path="/" component={Home } />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/videos" component={Videos} />
            <Route path="/video" component={Video} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default routes
