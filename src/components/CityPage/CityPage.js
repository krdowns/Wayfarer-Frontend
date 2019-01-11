import React, { Component } from 'react'
import './CityPage.css'
import CityTab from '../CityTab/CityTab'
import CityDetail from '../CityDetail/CityDetail'

class CityPage extends Component {
  render () {
    return (
        <div>
          <section className="cities-list">
            <h1>Cities</h1>
            <div>
              <CityTab />
            </div>
          </section>
          <section className="city-detail">
            <div>
              <CityDetail />
            </div>
          </section>
        </div>
    )
  }
}

export default CityPage