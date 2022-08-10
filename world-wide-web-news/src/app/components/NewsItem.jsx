import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './NewsItem.css';

export const NewsItem = ({ title, description, urlToImage, source, url }) => {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Header>{source.name}</Card.Header>
      <div className="moduleItemIntrotext">
        <Card.Img variant="top" src={urlToImage} alt={title}/>
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
        <Button style={{borderRadius: '0px'}} className='btn btn-outline-primary w-100' variant="light" href={url}>Read more</Button>
      </Card.Footer>
    </Card>
  )
}