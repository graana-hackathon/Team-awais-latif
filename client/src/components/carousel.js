import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

import image1 from "../assets/images/building1.jpg";
import image2 from "../assets/images/building2.jpg";
import image3 from "../assets/images/building3.jpg";
import image4 from "../assets/images/building4.jpg";

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay >
                <div style = {{"height": "400px"}}>
                    <img src={image1} style = {{"height":"100%"}}/>
                </div>
                <div style = {{"height": "400px"}} >
                    <img src={image2} style = {{"height":"100%"}} />
                </div>
                <div style = {{"height": "400px"}}>
                    <img src={image3} style = {{"height":"100%"}} />
                </div>
                <div style = {{"height": "400px"}}>
                    <img src={image4} style = {{"height":"100%"}} />
                </div>
            </Carousel>
        </div>
    );
}