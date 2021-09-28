import React, { Component } from 'react';
import axios from 'axios';
import authService from './api-authorization/AuthorizeService'
import './Photos.css';
import { Tab } from 'bootstrap';

export class PhotosAdmin extends Component {
    static displayName = PhotosAdmin.name;

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
                        <th>Name</th>
                        <th>Tag</th>
                        <th>Description</th>
                        <th>Photo</th>
                    </tr>
                </thead>
                <tbody>
                    {images.map(image =>
                        <tr key={image.name}>
                            <td>{image.name}</td>
                            <td>.....</td>
                            <td>.....</td>
                            <img style={{margin:2+'em'}} className="profile-photo" src={image.imageB64}></img>

                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : PhotosAdmin.renderPhotos(this.state.existingImages);
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className="card-body">
                                <h5 class="card-header">Photo Upload</h5>
                                <form className="card-body" onSubmit={e => this.submit(e)}>
                                    <div className="container">
                                        <div className="row">
                                         
                                            <div className="col-8 text-left">
                                                <input type="file" onChange={e => this.setFile(e)} />
                                            </div>
                                            <div className="col-4 text-right">
                                                <button className="btn btn-primary" type="submit">Upload</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <input/>
                                            </div>
                                            <div className="col-2 text-left">
                                                <label>Tag</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-6">
                                                <input />
                                            </div>
                                            <div className="col-2 text-left">
                                                <label>Description</label>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <div className="card">
                            {contents}
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