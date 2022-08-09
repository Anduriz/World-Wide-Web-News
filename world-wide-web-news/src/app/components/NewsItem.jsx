import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const NewsItem = ({ title, description, urlToImage, source, url }) => {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Header>{source.name}</Card.Header>
      <Card.Img variant="top" src={urlToImage} alt={title}/>
      <Card.Body>
        <Card.Title>
            {title}
        </Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Button className='w-100' variant="primary" href={url}>Read more</Button>
      </Card.Footer>
    </Card>
  )
}