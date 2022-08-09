import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NewsItem } from "./NewsItem";
import { useFetchNews } from "../hooks/useFetchNews";

export const NewsGrid = ({ category }) => {

  const { items, isLoading } = useFetchNews(category);
  
  return (
    <>
      { isLoading ? ( <h3>CARGANDO...</h3> ) : (
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
      )}
    </>
  );
};