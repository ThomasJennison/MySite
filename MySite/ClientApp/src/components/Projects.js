import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class Projects extends Component {
    static displayName = Projects.name;

    constructor(props) {
        super(props);
        this.state = { loading: false };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h1>Hiiiii</h1>
            </div>
        );
    }
}