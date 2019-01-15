import React, { Component } from 'react'
import './CityTab.css'

class CityTab extends Component {
  render () {
    return (
        <div className="single-city-tab">
          <img className="post-image" src="../images/SF-Night.jpg" alt="SF" />
          <h4>San Francisco</h4>
        </div>
    )
  }
}

export default CityTab