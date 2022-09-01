import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


export const NewsItemPage = () => {

  const { id } = useParams(); 

  const article = JSON.parse(localStorage.getItem('article'));

  const {title, description, content, urlToImage, source} = article.find( article => article.uniqueID === id)

  console.log(article.id);

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }, [])
  

  return (
    <div className="
      container
      flex-column
      align-items-center 
      justify-content-center mt-3"
    >
      <Card className='newsItemColorTheme'>
        <Card.Header className='d-flex justify-content-center newsItemSource'>
          {source.name}
        </Card.Header>
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body>
          <Card.Title>
          {title}
          </Card.Title>
          <Card.Text>
          <p>
            {description}
            {content}
          </p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quasi, repellendus perspiciatis, facere maxime ullam modi laudantium cum dicta itaque illo ipsum nesciunt, magnam rem eum suscipit maiores molestiae ex?
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam expedita, sit quae, hic molestiae rerum, a officia provident deserunt necessitatibus repudiandae suscipit quod inventore laudantium quia blanditiis nam veritatis. Enim?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere veniam debitis qui. Sint commodi perferendis enim totam numquam blanditiis atque eos odio officia cupiditate cum consectetur ab, deserunt magni voluptatem?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}
