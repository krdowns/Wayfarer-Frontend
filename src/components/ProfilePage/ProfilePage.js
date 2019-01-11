import React, { Component } from 'react'
import './ProfilePage.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import UserPosts from '../UserPosts/UserPosts'

class ProfilePage extends Component {
  render () {
    return (
        <div>
          <section className="user-info-tab">
            <h1>User Info</h1>
            <div>
              <ProfileDetails />
            </div>
          </section>
          <section className="user-posts">
            <div>
              <UserPosts />
            </div>
          </section>
        </div>
    )
  }
}

export default ProfilePage