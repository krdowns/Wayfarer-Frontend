import React, { Component } from 'react'
import './CityDetail.css'

class CityDetail extends Component {
  render () {
    return (
        <div className="city-detail">
          <img className="post-image" src="../images/SF-Night.jpg" alt="SF" />
          <h1>San Francisco</h1>
        </div>
    )
  }
}

export default CityDetail
