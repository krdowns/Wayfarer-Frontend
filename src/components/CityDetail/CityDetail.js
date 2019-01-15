import React, { Component } from 'react'
import './CityDetail.css'
import UserPostTab from '../UserPostTab/UserPostTab' 

class CityDetail extends Component {
  render () {
    return (
      <div>
        <div className="city-detail">
          <div className="city-detail-header">
            <h3>London</h3><br/>
            <h4>United Kingdom</h4>
          </div>
          <img className="city-detail-img" src="../images/SF-Night.jpg" alt="SF" />
        </div>
        <div className="city-detail-posts">
        <h4>Posts</h4>
          <UserPostTab />
          <UserPostTab />
        </div>
      </div>
    )
  }
}

export default CityDetail
