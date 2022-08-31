import { NewsGrid } from "../components/NewsGrid";
import { NewsCarousel } from "../components/News.Carousel";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNews } from "../../@store/slices/news/newsThunks";
import { CheckingLoading } from "../../ui/components/CheckingLoading/CheckingLoading";

export const CategoryPage = ({ category }) => {

  const dispatch = useDispatch();
  
  const { isLoading, news, page } = useSelector( state => state.news );

  localStorage.setItem('article', JSON.stringify(news));

  useEffect(() => {
    localStorage.removeItem('article');
    dispatch(getNews({page, category}));
  }, [category])
  
  const { width } = useWindowDimensions();

  const carouselSize = 4;

  return (
    <div>
      { isLoading ? <CheckingLoading/> :
        <>
          {width >= 992 ? (
            <>
              <NewsCarousel category={`${category}Carousel`} items={news.slice(0, carouselSize)}/>
              <NewsGrid category={`${category}`} items={news.slice(carouselSize)}/>
            </>
          ) : ( <NewsGrid category={`${category}`} items={news}/> )}
        </>
      }
    </div>
  );
};
