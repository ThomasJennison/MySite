import React, { Component } from 'react';
import axios from 'axios';
import authService from './api-authorization/AuthorizeService'
import './Photos.css';

export class Photos extends Component {
    static displayName = Photos.name;

    componentDidMount() {
        this.getImages();
    }

    constructor(props) {
        super(props);
        this.state = { file: '', existingImages: [], loading: true };
        this.getImages();
    }

    setFile(e) {
        this.setState({ file: e.target.files[0] });
        console.log(this.state);
    }

    async submit(e) {
        const token = await authService.getAccessToken();
        console.log(this.state.file);
        //e.preventDefault();
        const url = '/api/uploader';
        const formData = new FormData();
        formData.append('body', this.state.file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'token': !token ? {} : { 'Authorization': `Bearer ${token}` }
            },
        };
        const HTTP = axios.create({
            withCredentials: true
        });

        var post = HTTP.post(url, formData, config).then(result => {
            if (!result.data.success) {
                alert("Upload Failed");
            }
            else {
                alert("Upload Ok");
            }
        })
        return post;   
    }

    static renderPhotos(images) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Photo</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {images.map(image =>
                        <tr key={image.name}>
                            <td>{image.name}</td>
                            <img className="profile-photo" src={image.imageB64}></img>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
    
    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Photos.renderPhotos(this.state.existingImages);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            {contents}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-header">Photo Upload</h5>
                                <form className="card-body" onSubmit={e => this.submit(e)}>
                                    <input type="file" onChange={e => this.setFile(e)} />
                                    <button className="btn btn-primary" type="submit">Upload</button>
                                </form>
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
