import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
    render() {
      return(
        <div className='post-container'>
          <h1>Title: {this.props.title}</h1>
          <img className="post-image" src="../images/nyc.jpeg" alt="NYC" />
          <h2>By: {this.props.author}</h2>
          <p>Article: {this.props.body}</p>
        </div>
      )
    }
  }

export default Post;