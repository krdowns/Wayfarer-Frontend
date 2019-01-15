import React, { Component } from 'react';
import './Post.css'

class Post extends Component {
    render() {
      return(
        <div className='post-show-page-container'>
          <div class="post-header-container">
            <img className="post-show-page-image" src="../images/nyc.jpeg" alt="NYC" />
            <div className="post-header-text-container">
              <h2>New York, New York {this.props.title}</h2>
              <p> Frank Sinatra {this.props.author}</p>
            </div>
          </div>
          <p className='post-show-page-article'>Just sit right back and you'll hear a tale a tale of a fateful trip that started from this tropic port aboard this tiny ship. Makin' your way in the world today takes everything you've got. Takin' a break from all your worries sure would help a lot. Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. These days are all Happy and Free. These days are all share them with me oh baby. Now were up in the big leagues getting' our turn at bat. Believe it or not I'm walking on air. I never thought I could feel so free. And you know where you were then. Girls were girls and men were men. Mister we could use a man like Herbert Hoover again. Fleeing from the Cylon tyranny the last Battlestar – Galactica - leads a rag-tag fugitive fleet on a lonely quest - a shining planet known as Earth. Here he comes Here comes Speed Racer. He's a demon on wheels. But they got diff'rent strokes. It takes diff'rent strokes - it takes diff'rent strokes to move the world. Thank you for being a friend. Travelled down the road and back again. Your heart is true you're a pal and a confidant. Were gonna do it. Give us any chance well take it. Give us any rule we'll break it. We're gonna make our dreams come true. Maybe you and me were never meant to be. But baby think of me once in awhile. I'm at WKRP in Cincinnati. Space. The final frontier. These are the voyages of the Starship Enterprise. Got kind of tired packin' and unpackin' - town to town and up and down the dial. Believe it or not I'm walking on air. I never thought I could feel so free! Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. Just two good ol' boys Never meanin' no harm. Beats all you've ever saw been in trouble with the law since the day they was born. Fleeing from the Cylon tyranny the last Battlestar – Galactica - leads a rag-tag fugitive fleet on a lonely quest - a shining planet known as Earth. Here he comes Here comes Speed Racer. He's a demon on wheels. But they got diff'rent strokes. It takes diff'rent strokes - it takes diff'rent strokes to move the world. Thank you for being a friend. Travelled down the road and back again. Your heart is true you're a pal and a confidant. Were gonna do it. Give us any chance well take it. Give us any rule we'll break it. We're gonna make our dreams come true. Maybe you and me were never meant to be. But baby think of me once in awhile. I'm at WKRP in Cincinnati. Space. The final frontier. These are the voyages of the Starship Enterprise. Got kind of tired packin' and unpackin' - town to town and up and down the dial. Believe it or not I'm walking on air. I never thought I could feel so free! Fish don't fry in the kitchen and beans don't burn on the grill. Took a whole lotta tryin' just to get up that hill. Just two good ol' boys Never meanin' no harm. Beats all you've ever saw been in trouble with the law since the day they was born.{this.props.body}</p>
        </div>
      )
    }
  }

export default Post;