import React, { Component } from 'react';
import './Home.css';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
        <div>
            <h1 className="text-center" >Welcome to my site!</h1>
            <div className="text-center">
                <img className="img-thumbnail rounded-circle z-depth-2 profile-photo"
                     alt="photo of me"
                     src="https://media-exp1.licdn.com/dms/image/C5603AQH5IROMz-2pXg/profile-displayphoto-shrink_800_800/0/1617758159796?e=1633564800&v=beta&t=pyPkGi-NpGZaqQO3FZM4TpdK30shMl83YFevfClGu3U"></img>
            </div>
            <p className="text-center">Im a software developer from Ontario Canada</p>
            <p className="text-center">I like to write and play music, take photos and take on more projects than ill probably ever end up finising :)</p>
            <p className="text-center">I built this site to host stuf i make, have a look around</p>
      </div>
    );
  }
}
