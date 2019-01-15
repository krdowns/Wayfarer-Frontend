import React, { Component } from 'react'
import './UserPosts.css'
import RecentPostTab from '../RecentPostTab/RecentPostTab'

class UserPosts extends Component {
  render () {
    return (
        <div className="user-post-content"> 
          <h3>Recent Posts</h3>
          <div className="profile-post-container">
            <RecentPostTab />
            <RecentPostTab />
            <RecentPostTab />
          </div>
        </div>
    )
  }
}

export default UserPosts
