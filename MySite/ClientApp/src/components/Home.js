import React, { Component } from 'react';
import './Home.css';
import Gallery from 'react-grid-gallery';
import profilePhoto from './cbPortriat.png';
import authService from './api-authorization/AuthorizeService'

export class Home extends Component {
    static displayName = Home.name;

    componentDidMount() {
        this.getImages();
    }

    constructor(props) {
        super(props);
        this.state = { existingImages: [], loading: true };
    }

    static renderPhotos(images) {
        var controlImages = [];
        for (var i = 0; i < images.length; i++) {
            controlImages.push({
                src: images[i].imageB64,
                thumbnail: images[i].imageB64,
                thumbnailWidth: 100,
                thumbnailHeight: 100,
            })
        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <h1 className="card-header">Photos</h1>
                            <p className="card-text">blah blah blah blah <br />
                                Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah <br />
                                Blah blah blah Blah blah blah Blah blah blah Blah blah blah Blah blah blah </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Gallery images={controlImages} />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        let photoDisplay = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderPhotos(this.state.existingImages);
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="text-center profile-photo-card">
                                <img src={profilePhoto} alt="pixel art of me"
                                    className="img-thumbnail rounded-circle z-depth-2 profile-photo" />
                            </div>
                        </div>

                        <div className="col-sm-7">
                            <div className="card card-body about-card">
                                <h1 className="card-header">About</h1>
                                <p className="card-text text-center">
                                    Hey, I’m Thomas, welcome to my site! <br />
                                    I built it for kicks as a project to get more familiar with Asp.Net Core + React.<br />
                                    I’m a software developer / musician from Ontario. When I’m not behind a screen I like to Kayak and go for hikes.<br />
                                    I love programming, music, DIY electronics (although I don’t tinker and build them as much these days), nature, music, art (and my lovely spouse 😊)<br />
                                    Have a look around!<br/>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="card">
                                {photoDisplay}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    async getImages() {
        const token = await authService.getAccessToken();
        const response = await fetch('photoviewer', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ existingImages: data, loading: false });
    }
}