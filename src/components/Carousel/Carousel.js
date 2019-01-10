import React, {Component} from 'react';

class Carousel extends Component {
    render() {
        return (
        <section> 
            <div id="carousel">
                <div id="carouselIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselIndicators" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100 hover-shadow" src="images/SF-Night.jpg" alt="First slide"
                                onclick="openModal();currentSlide(1)" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 hover-shadow" src="images/losangeles.jpg" alt="Second slide"
                                onclick="openModal();currentSlide(2)" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100 hover-shadow" src="images/nyc.jpeg" alt="Third slide"
                                onclick="openModal();currentSlide(3)" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        </section>   

        );
    }
}

export default Carousel;