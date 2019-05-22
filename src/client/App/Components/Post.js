import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Post.scss';
import Header from './Header';

class Post extends Component {

    deleteManga(id) {
        fetch(`/api/remove?id=${id}`, {
            method: 'post'
        });
    }

    render() {
        const {
            location: {
                state: {
                    post: {
                        data: {
                            name = '',
                            description = '',
                            author = '',
                            thumbnail = ''
                        },
                        _id: id
                    } = {},
                    post
                } = {}
            } = {}
        } = this.props;
        return (
            <div>
                <Header />
                <div className="row post">
                    <div className="col-md-6">
                        <img src={thumbnail}></img>
                        <div className="content">
                            <h1 className="title">{name}</h1>
                            <b>Description:</b>
                            <div dangerouslySetInnerHTML={ { __html: description } }></div>
                            <b>Author:</b>
                            <div>{author}</div>
                        </div>
                        <Link className="item" to={{
                            pathname: `/edit/${id}`,
                            state: { post }
                            }} >
                            <button className="btn btn-success">Edit</button>
                        </Link>
                        <Link className="item" to={{
                            pathname: '/'
                            }} >
                            <button className="btn btn-danger" onClick={() => {this.deleteManga(id)}}>Delete</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;