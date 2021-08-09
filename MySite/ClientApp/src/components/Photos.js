import React, { Component } from 'react';

export class Photos extends Component {
    static displayName = Photos.name;
    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    fileUploadHandler = () => {

    }

    render() {
        return (
            <div className="App">
                <input type="file" onChange={this.fileSelectedHandler} />
                <button onClick={this.fileUploadHandler}>Upload</button>
            </div>
        );
    }
}
