import React, { Component } from 'react'
import './CityTab.css'

class CityTab extends Component {
  render () {
    return (
        <div className="single-city-tab">
          {/* <img className="post-image" src="../images/SF-Night.jpg" alt="SF" /> */}
          <img src={window.location.origin + '/images/SF-Night.jpg'} />
          <h4>Oakland</h4>
        </div>
    )
  }
}

export default CityTab