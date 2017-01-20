import React, { Component } from 'react';
import './main.css';
import CommentList from './CommentList.jsx';

export default class App extends Component {
    render() {
	return (
	    <ul className="header">
		<li className="lbar"><a className="lbaritem" href="#home">Home</a></li>
		<li className="lbar"><a className="lbaritem" href="#news">News</a></li>
		<li className="lbar"><a className="lbaritem" href="#contact">Contact</a></li>
		<li className="lbar"><a className="lbaritem" href="about.html">About</a></li>
	    </ul>
	);
    }
}

