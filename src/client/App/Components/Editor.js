import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import { MDBInput } from 'mdbreact';
import { Link } from "react-router-dom";
import _ from 'lodash';
import './Editor.scss';
import Header from './Header';

class Editor extends Component {
    state = {
        post: _.cloneDeep(this.props.location.state.post.data) || {}
    };

    savePost() {
        const { post = {} } = this.state;
        fetch('/api/create', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({data: post})
        });
    }

    submit() {
        const {post = {}} = this.state;
        const dataUpdate = {...this.props.location.state.post.data, ...post};
        fetch(`/api/update?id=${this.props.location.state.post._id}`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({data: dataUpdate})
        });
    }

    onEditorChange( evt ) {
        const {post = {}} = this.state;
        post['description'] = evt.editor.getData();
        this.setState({ post });
    }

    handleChange(e) {
        const {post = {}} = this.state;
        post[e.target.name] = e.target.value;
        this.setState({ post });
    }

    render() {
        const {
            match: {
                path = ''
            } = {},
            location: {
                state: {
                    post: {
                        name: propsName = '',
                        description: propsDescription = '',
                        author: propsAuthor = '',
                        thumbnail: propsThumbnail = ''
                    } = {},
                } = {}
            } = {}
        } = this.props;
        const {
            post: {
                description = propsDescription,
                name = propsName,
                author = propsAuthor,
                thumbnail = propsThumbnail
            } = {},
        } = this.state;
        return (
            <div>
                <Header />
                <div className="row editor">
                    <div className="col-md-6">
                        <h1>EDITOR</h1>
                        <MDBInput label="Name" group type="text" name="name" value={name} onInput={e => this.handleChange(e)} />
                        <CKEditor
                            data={description}
                            onChange={(e) => this.onEditorChange(e)}
                        />
                        <MDBInput label="Author" group type="text" name="author" value={author} onInput={e => this.handleChange(e)} />
                        <MDBInput label="Thumbnail Image Link" group type="text" name="thumbnail" value={thumbnail} onInput={e => this.handleChange(e)} />
                        {
                            path === '/create' ? 
                            <Link to={{pathname: `/`}} onClick={() => this.savePost()}>
                                <button className="btn btn-success">Save</button>
                            </Link> :
                            <Link to={{pathname: `/`}} onClick={() => this.submit()}>
                                <button className="btn btn-success">Save</button>
                            </Link>
                        }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Editor;