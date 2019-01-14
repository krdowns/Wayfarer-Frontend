import React, { Component } from 'react'
import './ProfilePage.css'
import Post from '../Post/Post'

class ProfilePage extends Component {
  render () {
    return (
        <div className="profile-page-body">
            <h1>Profile</h1>
            <img src="#" alt="profile-pic" />
            <h5>{this.props.name}, {this.props.currentCity}, Joined: 01/10/2019</h5>
            <button>Edit Profile</button>
            <section className="Post-Container">
              <div><h3>Your Posts</h3></div>
              <Post />
            </section>
        </div>
    )
  }
}

export default ProfilePage