import { NewsGrid } from "../components/NewsGrid";
import { NewsCarousel } from "../components/News.Carousel";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { BiLoader } from 'react-icons/bi';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../@store/slices/news/newsThunks";

export const CategoryPage = ({ category }) => {

  const dispatch = useDispatch();
  const { isLoading, news, page } = useSelector( state => state.news );

  useEffect(() => {
    dispatch(getNews({page, category}));
  }, [category])
  

  const { width } = useWindowDimensions();

  const carouselSize = 4;

  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <BiLoader size={70}/>
        </div>
      ) : (
        <>
          {/* <button onClick={ () => dispatch(getNews({page, category})) }>test</button> */}
          {width >= 992 && (<NewsCarousel category={`${category}Carousel`} items={news.slice(0, carouselSize)}/>)}
          <NewsGrid category={`${category}Grid`} items={news.slice(carouselSize)}/>
          
        </>
      )}
     
    </div>
  );
};
