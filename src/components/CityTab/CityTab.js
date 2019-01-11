import React, { Component } from 'react'
import './CityTab.css'

class CityTab extends Component {
  render () {
    return (
        <div className="single-city-tab">
          <img className="post-image" src="../images/SF-Night.jpg" alt="SF" />
          <h1>San Francisco</h1>
        </div>
    )
  }
}

export default CityTab