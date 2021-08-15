import React, { Component } from 'react';
import axios from 'axios'

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
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)

        axios.post('https://localhost:5001/photos/OnPostUploadAsync', fd)
            .then(res => {
                console.log(res);
            })
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
