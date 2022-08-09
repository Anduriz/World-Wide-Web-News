import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getTopNews } from '../helpers/getTopNews'

import "./NewsCarousel.css";

export const NewsCarousel = () => {

    const [items, setItems] = useState([]);

    const getItems = async() => {
        const newItems = await getTopNews();
        setItems(newItems);
    }

  useEffect(() => {
    getItems();
  }, [])

  return (
    <Carousel style={{ height: '28rem' }} className="mb-3">
      { items.map( ({urlToImage, title, description}) => (
        <Carousel.Item>
          <div className="moduleItemNewsCarousel">
            <img
              src={urlToImage}
              alt={title}
            />
          </div>
        <Carousel.Caption>
          <h3>{title}</h3>
          <p>{description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      )) }
    </Carousel>
  )
}