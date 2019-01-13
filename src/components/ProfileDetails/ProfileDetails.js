import React, { Component } from 'react'
import './ProfileDetails.css'

class ProfileDetails extends Component {
  render () {
    return (
      <div className="profile-page-left">
        <img className="profile-pic" src="../images/dark-profile-default.jpg" alt="profile-pic" />
        <div className="user-info">
          <h3>Kenny</h3>
          <h7>City: San Francisco 
            <br/>
            <br/>Joined: 01/10/19 
          </h7>
        </div>
      </div>
    )
  }
}

export default ProfileDetails