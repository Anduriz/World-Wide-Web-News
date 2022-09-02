import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultImage from '../../assets/dafaultImage.jpg'
import { Link } from 'react-router-dom';
import './NewsItem.css';

export const NewsItem = ({ uniqueID, title, description, urlToImage, source, url, category }) => {

  return (
    <Card style={{ width: '50rem' }} className="newsItemColorTheme">
      <Card.Header className='d-flex justify-content-center newsItemSource'>
        {source.name}
      </Card.Header>
      <div className="moduleItemIntrotext">
        <Card.Img variant="top" src={urlToImage ? urlToImage : defaultImage} alt={title}/>
      </div>
      <Card.Body>
        <Card.Title>
            {title}
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted p-0">
        <Link style={{border: '0', borderRadius: '2px'}} className='btn btn-outline-dark w-100' variant="light" to={`${uniqueID}`}>
          Read more
        </Link>
        {/* <NavLink to={`news/${category}/${url}`}>Read me</NavLink> */}
        {/* <Button style={{borderRadius: '0px'}} className='btn btn-outline-primary w-100' variant="light" href={`news/${category}/${title}`}>Read more</Button> */}
        {/* <Button style={{border: '0', borderRadius: '2px'}} className='btn btn-outline-dark w-100' variant="light" href={url}>Read more</Button> */}
      </Card.Footer>
    </Card>
  )
}