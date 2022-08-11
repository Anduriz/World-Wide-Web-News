import { useState, useEffect } from 'react';
import { getNews } from '../helpers/getNews'

export const useFetchNewsByTitle = ( category, title ) => {
    const [items, setItems] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    const getItems = async() => {
        const newItems = await getNews(category);
        setItems(
          newItems.filter(item => item.title === title)
          );
        setIsLoading(false);
    }

  useEffect(() => {
    setIsLoading(true);
    getItems();
  }, [category])

  return {
    items,
    isLoading
  };
}
