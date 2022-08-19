import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import defaultImage from '../../assets/dafaultImage.png'
import './NewsItem.css';

export const NewsItem = ({ title, description, urlToImage, source, url, category }) => {

  return (
    <Card style={{ width: '50rem' }} className="newsItemColorTheme">
      <Card.Header>{source.name}</Card.Header>
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
        {/* <NavLink to={`news/${category}/${url}`}>Read me</NavLink> */}
        {/* <Button style={{borderRadius: '0px'}} className='btn btn-outline-primary w-100' variant="light" href={`news/${category}/${title}`}>Read more</Button> */}
        <Button style={{border: '0', borderRadius: '2px'}} className='btn btn-outline-dark w-100' variant="light" href={url}>Read more</Button>
      </Card.Footer>
    </Card>
  )
}