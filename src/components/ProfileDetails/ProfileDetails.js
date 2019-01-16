import React, { Component } from 'react'
import './ProfileDetails.css'


class ProfileDetails extends Component {
  render () {
    return (
      <div className="profile-page-left">
        <img className="profile-pic" src="../images/dark-profile-default.jpg" alt="profile-pic" />
        <div className="edit-profile">
        {this.props.edit}
        </div>
        <div className="user-info">
          <h5 className="profile-detail-name">{this.props.name}</h5>
          <h6 className="current-city">City: {this.props.currentCity}
            
            <br/>
            <br/>Joined: {this.props.joinDate}
          </h6>
          <br></br>
        </div>
      </div>
    )
  }
}

export default ProfileDetails

