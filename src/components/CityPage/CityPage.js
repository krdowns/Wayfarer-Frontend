import React, { Component } from 'react'
import './CityPage.css'
import CityTab from '../CityTab/CityTab'
import CityDetail from '../CityDetail/CityDetail'

class CityPage extends Component {
  render () {
    return (
        <div className="city-page-content">
          <section className="cities-list">
            <h2>Cities</h2>
            <div>
              <CityTab />
              <CityTab />
              <CityTab />
              <CityTab />
            </div>
          </section>
          <div className="dividing-line"></div>
          <section className="city-detail-column">
            <div>
              <CityDetail />
            </div>
          </section>
        </div>
    )
  }
}

export default CityPage