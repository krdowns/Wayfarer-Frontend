import React, { Component } from 'react'
import './ProfileDetails.css'

class ProfileDetails extends Component {
  render () {
    return (
        <div className="user-info">
          <img className="post-image" src="../images/SF-Night.jpg" alt="SF" />
          <h1>San Francisco</h1>
        </div>
    )
  }
}

export default ProfileDetails