import Carousel from 'react-bootstrap/Carousel';
import "./NewsCarousel.css";

export const NewsCarousel = ({items}) => {

  return (
    <Carousel style={{ height: '28rem' }} className="mb-3 animate__animated animate__fadeIn">

      {
        items.map( ({uniqueID, urlToImage, title, description}) => (
          <Carousel.Item key={uniqueID}>
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