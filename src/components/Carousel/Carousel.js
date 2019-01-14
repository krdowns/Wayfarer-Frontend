import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';

class CarouselComp extends Component {
    render() {
        return (
        <section> 
              <Carousel>
                    <Carousel.Item>
                        <img width={1450} height={750} alt="1450x750" src="/images/losangeles.jpg" />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img width={1450} height={750} alt="1450x750" src="/images/nyc.jpg" />
                    </Carousel.Item>
                    
                    <Carousel.Item>
                        <img width={1450} height={750} alt="1450x750" src="/images/SF-Night.jpg" />
                    </Carousel.Item>
                </Carousel>
        </section>   

        );
    }
}

export default CarouselComp;