import React, { Component } from 'react'
import { Modal } from 'react-materialize'
import './ProfilePage.css'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import UserPosts from '../UserPosts/UserPosts'
import EditInfoForm from '../EditInfoForm/EditInfoForm'

class ProfilePage extends Component {
  render () {
    let editButton = []
    if (this.props.isLoggedIn) {
      editButton.push(
        <Modal header='Edit Info' trigger={<a className="formButtons">Edit Info</a>}>
          <EditInfoForm />
        </Modal>)
    }
    return (
        <div className="profile-page-main">
          <section className="user-info-tab">
            <div>
              <ProfileDetails name={this.props.name} currentCity={this.props.currentCity} joinDate={this.props.joinDate} edit={editButton} />
            </div>
          </section>
          <section className="dividing-line" />
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
