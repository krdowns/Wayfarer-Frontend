import React, { Component } from 'react'
import './ProfileDetails.css'

class ProfileDetails extends Component {
  render () {
    return (
      <div className="profile-page-left">
        <img className="profile-pic" src="../images/dark-profile-default.jpg" alt="profile-pic" />
        <div className="user-info">
          <h6>Kenny Downs</h6>
            <br/>
          <h6>City: San Francisco 
            <br/>
            <br/>Joined: 01/10/19 
          </h6>
        </div>
      </div>
    )
  }
}

export default ProfileDetails