import { NewsGrid } from "../components/NewsGrid";

import { BiLoader } from 'react-icons/bi';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNewsByKeyword } from "../../@store/slices/news/newsThunks";
import { useParams } from "react-router-dom";

export const SearchPage = () => {

  const { keyword } = useParams(); 

  const dispatch = useDispatch();
  const { isLoading, news, page } = useSelector( state => state.news );

  useEffect(() => {
    dispatch(getNewsByKeyword({page, keyword}));
  }, [keyword])

  console.log(keyword);

  const showError = ((keyword.length < 0 ) || (news.length === 0));
 
  return (
    <div>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <BiLoader size={70}/>
        </div>
      ) : (
        <>
            <h2 className="d-flex justify-content-center mb-4">Search results for {keyword}</h2>
            { showError ? (
              <div className="d-flex justify-content-center alert alert-danger animate__animated animate__fadeIn">
                There's no news for:<b>{ keyword }</b>
              </div>
            ) : (
              <NewsGrid category={`${keyword}Grid`} items={news}/>
            )}
        </>
      )}
     
    </div>
  );
};
