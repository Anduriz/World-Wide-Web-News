import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NewsItem } from "./NewsItem";
import { getNews } from '../helpers/getNews'
import { useEffect, useState } from "react";

export const NewsGrid = () => {

const [items, setItems] = useState([]);

    const getItems = async() => {
        const newItems = await getNews();
        setItems(newItems);
    }

  useEffect(() => {
    getItems();
  }, [])
  
  return (
    <Row lg={4} md={1} className="g-4">
      {
        items.map( ({title, description, urlToImage, source, url}) => (
            <Col className="d-flex justify-content-center">
                <NewsItem title={title} description={description} urlToImage={urlToImage} source={source} url={url}/>
            </Col>
        )
        )
      }
    </Row>
  );
};