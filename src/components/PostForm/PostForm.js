import React, { Component } from 'react'

import './PostForm.css'

class PostForm extends Component {
  render () {
    return (
      <form>
        <div className="post-modal">
          <label htmlFor='title'>Title</label>
          <input type='text' name='title' onChange={this.props.handleInput} />
        </div>
        <div className="post-subject-field">
          <label htmlFor='post'>Post</label>
          <textarea type='textarea' name='post' className="text-area" onChange={this.props.handleInput} />
        </div>
        <input className="new-post-submit" value='Submit' type='submit' onClick={this.props.handleLogIn} />
      </form>
    )
  }
}

export default PostForm