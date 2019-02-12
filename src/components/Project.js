import React, { Component } from 'react';
import Header from './Header.js';
import * as projectsdata from "../projectsdata.js";

class Project extends Component {
    constructor() {
        super();
        this.state = {
            project: null,
        }
    }

    componentDidMount() {
        this.setState({project: this.props.match.params.project}, function() {
            console.log(this.state.project);
        });
    }

    

    render() {
        return (
            <div>
                <Header />
                {
                projectsdata[this.state.project]
                }
            </div>
        )
    }
}

export default Project;