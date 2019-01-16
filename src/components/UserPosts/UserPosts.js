import React, { Component } from 'react'
import './UserPosts.css'
import RecentPostTab from '../RecentPostTab/RecentPostTab'

class UserPosts extends Component {


  

  render () {

    let postsList = this.props.posts.map((p)=>{
      return (<RecentPostTab post={p}/>)
    })

    return (
        <div className="user-post-content"> 
          <h3>Recent Posts</h3>
          <div className="profile-post-container">
            {postsList}
          </div>
        </div>
    )
  }
}

export default UserPosts