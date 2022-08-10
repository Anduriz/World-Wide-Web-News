import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NewsItem } from "./NewsItem";
import { useFetchNews } from "../hooks/useFetchNews";
import { BiLoader } from 'react-icons/bi';

export const NewsGrid = ({ category }) => {

  const { items, isLoading } = useFetchNews(category);
  
  return (
    <>
      { isLoading ? ( <div className="d-flex justify-content-center"><BiLoader size={50}/></div> ) : (
      <Row lg={4} md={1} className="g-4">
        {
          items.map( ({title, description, urlToImage, source, url}) => (
              <Col className="d-flex justify-content-center animate__animated animate__fadeIn">
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