import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import First from "../Images/1st.jpg";
import Second from "../Images/2nd.jpg";
import Third from "../Images/3rd.jpg";

export const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0017/5010/6173/products/organdycarrots1_2000x.jpg?v=1639010691"
            // src={First}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Tables of Craft</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0017/5010/6173/products/organdycarrots1_2000x.jpg?v=1639010691"
            // src={Second}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>Sustainable and sensible</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://cdn.shopify.com/s/files/1/0017/5010/6173/products/organdycarrots1_2000x.jpg?v=1639010691"
            // src={Third}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3>Celebrating Handicraft</h3>
            {/* <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  