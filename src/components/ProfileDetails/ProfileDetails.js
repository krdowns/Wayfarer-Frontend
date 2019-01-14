import React, { Component } from 'react'
import './ProfileDetails.css'

class ProfileDetails extends Component {
  render () {
    return (
      <div className="profile-page-left">
        <img className="profile-pic" src="../images/dark-profile-default.jpg" alt="profile-pic" />
        <button class="edit-profile-button">Edit Profile</button>
        <div className="user-info">
          <h6 className="user-name">Kenny Downs</h6>
          <h6 className="current-city">City: San Francisco</h6>
          <h6 className="join-date">Joined: 01/10/19 </h6>
        </div>
      </div>
    )
  }
}

export default ProfileDetails