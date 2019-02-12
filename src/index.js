import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Project from './components/Project';

const routing = (
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route path="/project/:project" component={Project} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
