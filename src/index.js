import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Project from './components/Project';
import Gimmicks from './components/Gimmicks';
import Gallery from './components/Gallery';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/gimmicks" component={Gimmicks} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/project/:project" component={Project} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
