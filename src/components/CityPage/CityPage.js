import React, { Component } from 'react'
import './CityPage.css'
import CityTab from '../CityTab/CityTab'

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

        </div>
    )
  }
}

export default CityPage