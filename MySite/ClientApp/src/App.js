import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
import { PhotosAdmin } from './components/PhotosAdmin';
import { Music } from './components/Music';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <AuthorizeRoute path='/photos-admin' component={PhotosAdmin} />
                <Route path='/music' component={Music} />
                <Route path='/projects' component={Projects} />
                <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
            </Layout>
        );
    }
}