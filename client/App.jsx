import React, { Component } from 'react';
import './main.css';
import CommentList from './CommentList.jsx';

export default class App extends Component {
    render() {
	return (
            <div className="dtop">
		<p>This is my personal website.</p>
		<p>I use it to sound off on topics of personal interest to me.</p>
		<p>Check back early and often for updates!</p>
            </div>
	);
    }
}

