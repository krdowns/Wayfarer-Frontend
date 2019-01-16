import React, { Component } from 'react'
import './ProfileDetails.css'


class ProfileDetails extends Component {
  render () {
    return (
      <div className="profile-page-left">
        <img className="profile-pic" src="../images/dark-profile-default.jpg" alt="profile-pic" />
        <div className="user-info">
          <h3>{this.props.name}</h3>
          <h6>City: {this.props.currentCity}
            
            <br/>
            <br/>Joined: {this.props.joinDate}
          </h6>
          <br></br>
          <button className="edit-button">
          {this.props.edit}
          </button>
        </div>
      </div>
    )
  }
}

export default ProfileDetails

