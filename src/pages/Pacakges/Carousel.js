import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

function UncontrolledExample() {
    
        const mystyle = {
          color: "whitesmoke",
         
          padding: "2rem",
          
        };
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://badianhotel.com/wp-content/uploads/2020/08/baglioni-hotel-london.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://www.arabianbusiness.com/cloud/2021/09/15/QRW0solz-Paramount-Hotel-Dubai-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h1 style={mystyle}>Like all great travellers, I have seen more than I remember and remember more than I have seen.</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://media.radissonhotels.net/image/radisson-blu-resort-fiji-denarau-island/poolview/16256-113998-f63754927_3xl.jpg?impolicy=HomeHero"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h1 style={mystyle}>Traveling – it leaves you speechless, then turns you into a storyteller.</h1>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;