import React, { Component } from 'react';
import axios from 'axios';
import authService from './api-authorization/AuthorizeService'

export class Photos extends Component {
    static displayName = Photos.name;

    constructor(props) {
        super(props);
        this.state = { file: '' };
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
    
    render() {
        return (
            <div className="container-fluid">
                <form onSubmit={e => this.submit(e)}>
                    <div className="col-sm-12 btn btn-primary">
                        File Upload
                    </div>
                    <h1>File Upload</h1>
                    <input type="file" onChange={e => this.setFile(e)} />
                    <button className="btn btn-primary" type="submit">Upload</button>
                </form>
            </div>
        );
    }
}
