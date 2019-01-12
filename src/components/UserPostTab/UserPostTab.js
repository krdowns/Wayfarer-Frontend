import React, { Component } from 'react'
import './UserPostTab.css'

class UserPostTab extends Component {
  render () {
    return (
      <div>
        <div className="user-posts-tab">
            <h3>San Francisco Post</h3>
          <div className="post-snippet">
            <img className="post-image" src="../images/SF-Night.jpg" alt="SF" />
            <p>We touch the canvas, the canvas takes what it wants. I guess that would be considered a UFO. A big cotton ball in the sky. This is your world, whatever makes you happy you can put in it. Go crazy. Here's another little happy bush All you have to learn here is how to have fun.</p>
          </div>
        </div>
      <div className="user-posts-tab">
        <h3>San Francisco Post</h3>
        <div className="post-snippet">
        <img className="post-image" src="../images/SF-Night.jpg" alt="SF" />
        <p>We touch the canvas, the canvas takes what it wants. I guess that would be considered a UFO. A big cotton ball in the sky. This is your world, whatever makes you happy you can put in it. Go crazy. Here's another little happy bush All you have to learn here is how to have fun.</p>
        </div>
      </div>
    </div>
    )
  }
}

export default UserPostTab