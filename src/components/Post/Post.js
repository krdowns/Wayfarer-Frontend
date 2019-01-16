import React, { Component } from 'react';
import './Post.css'
import axios from 'axios'

class Post extends Component {
    render() {
      return(
        <div className='post-show-page-container'>
          <div class="post-header-container">
            <img className="post-show-page-image" src="../images/nyc.jpeg" alt="NYC" />
            <div className="post-header-text-container">
              <h2>New York, New York</h2>
              <p> Frank Sinatra {this.props.author}</p>
            </div>
          </div>
          <div className="post-header-dividing-line"></div>
          <h5 className="post-show-page-header">The City So Nice They Named It Twice</h5>
          <p className='post-show-page-article'>
            {this.props.body}
            Start spreadin' the news, I'm leavin' today
            I want to be a part of it
            New York, New York
            These vagabond shoes, are longing to stray
            Right through the very heart of it
            New York, New York
            I want to wake up, in a city that doesn't sleep
            And find I'm king of the hill
            Top of the heap
            These little town blues
            Are melting away
            I'll make a brand new start of it
            In old New York
            If I can make it there, I'll make it anywhere
            It's up to you, New York, New York
            New York, New York
            I want to wake up in a city that never sleeps
            And find I'm a number one, top of the list
            King of the hill, a number one
            These little town blues, are melting away
            I'll make a brand new start of it
            In old New York
            And
            If I can make it there
            I'm gonna make it anywhere
            It's up to you, New York
            New York
            New York
            <br/><br/>
            Start spreadin' the news, I'm leavin' today
            I want to be a part of it
            New York, New York
            These vagabond shoes, are longing to stray
            Right through the very heart of it
            New York, New York
            I want to wake up, in a city that doesn't sleep
            And find I'm king of the hill
            Top of the heap
            These little town blues
            Are melting away
            I'll make a brand new start of it
            In old New York
            If I can make it there, I'll make it anywhere
            It's up to you, New York, New York
            New York, New York
            I want to wake up in a city that never sleeps
            And find I'm a number one, top of the list
            King of the hill, a number one
            These little town blues, are melting away
            I'll make a brand new start of it
            In old New York
            And
            If I can make it there
            I'm gonna make it anywhere
            It's up to you, New York
            New York
            New York
            <br/><br/>
            Start spreadin' the news, I'm leavin' today
            I want to be a part of it
            New York, New York
            These vagabond shoes, are longing to stray
            Right through the very heart of it
            New York, New York
            I want to wake up, in a city that doesn't sleep
            And find I'm king of the hill
            Top of the heap
            These little town blues
            Are melting away
            I'll make a brand new start of it
            In old New York
            If I can make it there, I'll make it anywhere
            It's up to you, New York, New York
            New York, New York
            I want to wake up in a city that never sleeps
            And find I'm a number one, top of the list
            King of the hill, a number one
            These little town blues, are melting away
            I'll make a brand new start of it
            In old New York
            And
            If I can make it there
            I'm gonna make it anywhere
            It's up to you, New York
            New York
            New York
            <br/><br/>
            Start spreadin' the news, I'm leavin' today
            I want to be a part of it
            New York, New York
            These vagabond shoes, are longing to stray
            Right through the very heart of it
            New York, New York
            I want to wake up, in a city that doesn't sleep
            And find I'm king of the hill
            Top of the heap
            These little town blues
            Are melting away
            I'll make a brand new start of it
            In old New York
            If I can make it there, I'll make it anywhere
            It's up to you, New York, New York
            New York, New York
            I want to wake up in a city that never sleeps
            And find I'm a number one, top of the list
            King of the hill, a number one
            These little town blues, are melting away
            I'll make a brand new start of it
            In old New York
            And
            If I can make it there
            I'm gonna make it anywhere
            It's up to you, New York
            New York
            New York
          </p>
        </div>
      )
    }
  }

export default Post;