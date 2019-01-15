import React, { Component } from 'react'
import './ProfileDetails.css'

class ProfileDetails extends Component {
  render () {
    return (
      <div className="profile-page-left">
        <img className="profile-pic" src="../images/dark-profile-default.jpg" alt="profile-pic" />
        {/* <button class="edit-profile-button">Edit Profile</button> */}
        <div className="user-info">
          <h3>{this.props.name}</h3>
          <h6>City: {this.props.currentCity}
          {this.props.edit}
            <br/>
            <br/>Joined: 01/10/19 
            </h6>
        </div>
      </div>
    )
  }
}

export default ProfileDetails