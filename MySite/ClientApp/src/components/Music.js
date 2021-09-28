import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'
import BandcampPlayer from 'react-bandcamp'

export class Music extends Component {
    static displayName = Music.name;

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h1 className="card-header">
                               Ashmut
                            </h1>
                            <p>
                                Before the pandemic i was in a band called ashmut, we had some demoozz
                            </p>
                            <div className="card-body">
                                <BandcampPlayer
                                    album="2907533589"
                                    bgcol="blue"
                                    linkcol="blue"
                                    height="900px"
                                    width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h1 className="card-header">
                                Bad Crow Vibe's (Demo's)
                            </h1>
                            <p>
                                These songs were written / Recorded around 2012-2015 ish and
                                are of varying bad quality :)
                            </p>
                            <div className="card-body">
                                <BandcampPlayer
                                    album="2941944129"
                                    bgcol="blue"
                                    linkcol="blue"
                                    height="900px"
                                    width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

