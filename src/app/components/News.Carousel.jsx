import Carousel from 'react-bootstrap/Carousel';
import "./NewsCarousel.css";
import defaultImage from '../../assets/dafaultImage.jpg'

export const NewsCarousel = ({items}) => {

  return (
    <Carousel style={{ height: '28rem' }} className="mb-3 newsItemColorTheme animate__animated animate__fadeIn">

      {
        items.map( ({uniqueID, urlToImage, title, description}) => (
          <Carousel.Item key={uniqueID}>
            <div className="moduleItemNewsCarousel">
              <img
                src={urlToImage ? urlToImage : defaultImage}
                alt={title}
              />
            </div>
          <Carousel.Caption style={{textShadow: '2px 2px black'}}>
            <h3>{title}</h3>
            <p>{description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        )) }
    
    </Carousel>
  )
}