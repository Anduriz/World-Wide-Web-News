import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NewsItem } from "./NewsItem";
import { useFetchNews } from "../hooks/useFetchNews";
import { BiLoader } from 'react-icons/bi';

export const NewsGrid = ({ category }) => {

  const { items, isLoading } = useFetchNews(category);

  return (
    <>
      {/* <BiLoader size={50}/> */}
      { isLoading ? ( 
      <div className="d-flex justify-content-center"></div>
       ) : (
      <Row lg={4} md={1} className="g-4">
        {
          items.map( ({uniqueID, title, description, urlToImage, source, url}) => (
              <Col key={uniqueID} className="d-flex justify-content-center animate__animated animate__fadeIn">
                  <NewsItem key={uniqueID} title={title} description={description} urlToImage={urlToImage} source={source} url={url} category={category}/>
              </Col>
          )
          )
        }
      </Row>
      )}
    </>
  );
};