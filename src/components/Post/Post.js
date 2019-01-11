import React, { Component } from 'react';

class Post extends Component {
    render() {
      return(
        <div className='post-page'>
          <h1>{this.props.title}</h1>
          <h2>By {this.props.author}</h2>
          <p>{this.props.body}</p>
        </div>
      )
    }
  }

export default Post;