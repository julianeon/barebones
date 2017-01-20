import React, { Component } from 'react';

import CommentList from './CommentList.jsx';

export default class Mapp extends Component {
    render() {
	return (
            <div className="rope">
		<CommentList />
            </div>
	);
    }
}

