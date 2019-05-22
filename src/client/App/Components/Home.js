import React, { Component } from 'react';
import List from './List';
import { Link } from "react-router-dom";
import './Home.scss';
import Header from './Header';

class Home extends Component {

    state = {
        list: []
    };

    componentDidMount() {
      fetch('/api/gets')
        .then(res => res.json())
        .then(list => this.setState({ list }));
    }

    render() {
        const {list = []} = this.state;
        return (
            <div>
                <Header />
                <div className="content">
                        <h1>Board List</h1>
                        <Link to={{pathname: `/create`, state: {post: {}}}} >
                            <button className="btn btn-primary">Add Board</button>
                        </Link>
                        <List list={list}/>
                </div>
            </div>
        );
    }
}

export default Home;
