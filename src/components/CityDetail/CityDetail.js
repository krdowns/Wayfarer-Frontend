import React, { Component } from 'react'
import { Modal } from 'react-materialize'
import './CityDetail.css'
import UserPostTab from '../UserPostTab/UserPostTab' 
import PostForm from '../PostForm/PostForm'

class CityDetail extends Component {
  render () {
    return (
      <div>
        <div className="city-detail">
          <div className="city-detail-header">
            <h3>San Francisco</h3><br/>
            <h4>USA</h4>
            <button className="add-post">
              <Modal header='New Post' trigger={<a className="formButtons">Create Post</a>}>
                <PostForm handleInput={this.props.handleInput} handleLogIn={this.props.handleLogIn} />
              </Modal>
            </button>
          </div>
          <img className="city-detail-img" src="../images/SF-Night.jpg" alt="SF" />
        </div>
        <div className="city-detail-posts">
        {/* <h4>Posts</h4> */}
          <UserPostTab />
          <UserPostTab />
        </div>
      </div>
    )
  }
}

export default CityDetail
