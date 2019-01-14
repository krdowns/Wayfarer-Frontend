import React, { Component } from 'react'
import './UserPosts.css'
import UserPostTab from '../UserPostTab/UserPostTab'

class UserPosts extends Component {
  render () {
    return (
        <div className="user-post-content"> 
          <h3>Recent Posts</h3>
          <div className="profile-post-container">
            <UserPostTab />
          </div>
        </div>
    )
  }
}

export default UserPosts