import { NewsGrid } from "../components/NewsGrid";
import { NewsCarousel } from "../components/News.Carousel";

import { useFetchNews } from "../hooks/useFetchNews";
import useWindowDimensions from "../../hooks/useWindowDimensions";

import { BiLoader } from 'react-icons/bi';

export const CategoryPage = ({ category }) => {

  const { width } = useWindowDimensions();
  const { items, isLoading } = useFetchNews(category);

  const carouselSize = 4;

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <BiLoader size={70}/>
        </div>
      ) : (
        <>
          {width >= 992 && (<NewsCarousel items={items.slice(0, carouselSize)}/>)}
          <NewsGrid category={category} items={items.slice(carouselSize)}/>
        </>
      )}
    </div>
  );
};
