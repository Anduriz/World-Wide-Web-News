import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const NewsItem = ({ title, description, urlToImage, source, url }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={urlToImage} alt={title}/>
      <Card.Body>
        <Card.Title>
            {title}
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
            {source.name}
        </Card.Subtitle>
        <Card.Text>
          {description}
        </Card.Text>
        <Button variant="primary" href={url}>Read more</Button>
      </Card.Body>
    </Card>
  )
}