import React, {Component} from 'react';
import {Carousel} from 'react-materialize'

class Slider extends Component {
    render() {
        return (
            <Carousel options={{ fullWidth: true, indicators: true  }} images={[
                '../images/losangeles.jpg',
                '../images/nyc.jpeg',
                '../images/Paris.jpg',
                '../images/SF-Night.jpg'
            ]} />
      );
    }
}

export default Slider;