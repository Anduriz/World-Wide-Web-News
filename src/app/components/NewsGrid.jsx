import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { NewsItem } from "./NewsItem";

export const NewsGrid = ({ category, items }) => {

  return (
    <>

      <Row xxl={4} lg={3} md={1} className="g-4">
        {
          items.map( ({uniqueID, title, description, urlToImage, source, url}) => (
            <Col key={uniqueID} className="d-flex justify-content-center animate__animated animate__fadeIn">
                <NewsItem uniqueID={uniqueID} title={title} description={description} urlToImage={urlToImage} source={source} url={url} category={category}/>
            </Col>
          )
          )
        }
      </Row>

    </>
  );
};