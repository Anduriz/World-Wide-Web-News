import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { getTopNews } from '../helpers/getTopNews'

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
    <Carousel style={{width:'50rem'}}>
      { items.map( ({urlToImage, title, description}) => (
        <Carousel.Item>
        <img
          className="d-block"
          style={{width:'100%', height:'25rem'}}
          src={urlToImage}
          alt={title}
        />
        <Carousel.Caption>
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      )) }
    </Carousel>
  )
}