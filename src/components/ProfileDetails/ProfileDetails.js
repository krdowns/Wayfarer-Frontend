import React, { Component } from 'react'
import './ProfileDetails.css'

class ProfileDetails extends Component {
  render () {
    return (
      <div className="profile-page-left">
        <img className="profile-pic" src="../images/dark-profile-default.jpg" alt="profile-pic" />
        <div className="user-info">
          <p>Kenny</p>
          <p>San Francisco</p>
          <p>01/10/19</p>
        </div>
      </div>
    )
  }
}

export default ProfileDetails