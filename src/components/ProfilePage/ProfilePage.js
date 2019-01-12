import React, { Component } from 'react'
import './ProfilePage.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import UserPosts from '../UserPosts/UserPosts'

class ProfilePage extends Component {
  render () {
    return (
        <div className="profile-page-main">
          <section className="user-info-tab">
            <div>
              <ProfileDetails />
              <button className="edit-profile-button">Edit Profile</button>
            </div>
          </section>
          <section className="user-post-container">
            <div>
              <UserPosts />
            </div>
          </section>
        </div>
    )
  }
}

export default ProfilePage