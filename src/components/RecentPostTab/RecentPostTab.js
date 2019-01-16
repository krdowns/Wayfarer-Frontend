import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './RecentPostTab.css'

class RecentPostTab extends Component {
  render () {
    return (
      <div>
        <div className="recent-user-posts-tab">
          <div className="recent-post-snippet">
            {/* <img className="recent-post-image" src="../images/SF-Night.jpg" alt="SF" /> */}
            <img className="recent-post-image" src={this.props.post.img} alt="SF" />
            <div className="recent-post-article">
              {/* <h4><NavLink to="/post">My SF Journey</NavLink></h4> */}
              <h4><NavLink to="/post">{this.props.post.title}</NavLink></h4>
              
              <p>
                {
                  this.props.post.content
                }
                {/* We touch the canvas, the canvas takes what it wants. I guess that would be considered a UFO. A big cotton ball in the sky. This is your world, whatever makes you happy you can put in it. Go crazy. Here's another little happy bush All you have to learn here is how to have fun. This is your world, whatever makes you happy you can put in it. Go crazy. Here's another little happy bush All you have to learn here is how to have fun.
                We touch the canvas, the canvas takes what it wants. I guess that would be considered a UFO. A big cotton ball in the sky. This is your world, whatever makes you happy you can put in it. Go crazy. Here's another little happy bush All you have to learn here is how to have fun. This is your world, whatever makes you happy you can put in it. Go crazy. Here's another little happy bush All you have to learn here is how to have fun. */}
              </p>
            </div>
          </div>
        </div>
    </div>
    )
  }
}


export default RecentPostTab;