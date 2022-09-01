import { NewsGrid } from "../components/NewsGrid";

import { BiLoader } from 'react-icons/bi';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsByKeyword } from "../../@store/slices/news/newsThunks";
import { useParams } from "react-router-dom";
import { CheckingLoading } from "../../ui/components/CheckingLoading/CheckingLoading";

export const SearchPage = () => {

  const { keyword } = useParams(); 

  const dispatch = useDispatch();
  const { isLoading, news, page } = useSelector( state => state.news );

  localStorage.setItem('article', JSON.stringify(news));

  useEffect(() => {
    localStorage.removeItem('article');
    dispatch(getNewsByKeyword({page, keyword}));
  }, [keyword])

  console.log(keyword);

  const showError = ((keyword.length < 0 ) || (news.length === 0));
 
  return (
    <div>
      { isLoading ? <CheckingLoading/> : 
        <>
          <h2 className="d-flex justify-content-center mb-4">Search results for {keyword}</h2>
          { showError ? (
            <div className="d-flex justify-content-center alert alert-danger animate__animated animate__fadeIn">
              There's no news for:<b>{ keyword }</b>
            </div>
          ) : (
            <NewsGrid keyword={`${keyword}`} items={news}/>
          )}
        </>
      }
     
    </div>
  );
};
