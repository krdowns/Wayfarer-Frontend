import React, { Component } from 'react'
import './UserPosts.css'
import UserPostTab from '../UserPostTab/UserPostTab'

class UserPosts extends Component {
  render () {
    return (
        <div className="user-post-content"> 
          <h2>Recent Posts</h2>
          <div>
            <UserPostTab />
          </div>
        </div>
    )
  }
}

export default UserPosts