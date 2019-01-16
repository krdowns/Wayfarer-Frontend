import React, { Component } from 'react'
import { Modal } from 'react-materialize'
import './ProfilePage.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import UserPosts from '../UserPosts/UserPosts'
import axios from 'axios';

class ProfilePage extends Component {

  state = {
    posts: []
  }

  componentDidMount(){

    let token = localStorage.token

    let id = "5c3e4e0b774bb591002be9ad"
    axios.get('http://localhost:3001/api/posts/profile',{headers:{"Auth": token}})
    .then(response => {console.log(response.data)
      this.setState({posts: response.data})
    })
    .catch(err => console.log(err))
  }

  render () {
    let editButton = []
    if (this.props.isLoggedIn) {
      editButton.push(
        <Modal header='Edit Info' trigger={<a className="formButtons">Edit Profile</a>}>
          <h2>Edit Form goes here :)</h2>
        </Modal>)
    }
    return (
        <div className="profile-page-main">
          <section className="user-info-tab">
            <div>
              <ProfileDetails name={this.props.name} currentCity={this.props.currentCity} edit={editButton} joinDate={this.props.joinDate} />
            </div>
          </section>
          <section className="dividing-line" />
          <section className="user-post-container">
            <div>
              <UserPosts posts={this.state.posts}/>
            </div>
          </section>
        </div>
    )
  }
}

export default ProfilePage