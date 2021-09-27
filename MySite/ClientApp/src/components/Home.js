import React, { Component } from 'react';
import './Home.css';

import profilePhoto from './cbPortriat.png';



export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card-body bg-dark about-card">
                            <p className="card-text text-center text-light">Im a software developer from Ontario Canada</p>
                            <p className="card-text text-center text-light">I like to write and play music, take photos and take on more projects than ill probably ever end up finising :)</p>
                            <p className="card-text text-center text-light">I built this site to host stuf i make, have a look around</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="text-center card-body bg-dark profile-photo-card">
                                <img src={profilePhoto} alt="pixel art of me"
                                     className="img-thumbnail rounded-circle z-depth-2 profile-photo" />
                        </div>
                    </div>
                </div>
       
            </div>
      </div>
    );
  }
}
