import React, { Component } from 'react'
import './UserPosts.css'
import UserPostTab from '../UserPostTab/UserPostTab'

class UserPosts extends Component {
  render () {
    return (
        <div> 
          <UserPostTab />
        </div>
    )
  }
}

export default UserPosts