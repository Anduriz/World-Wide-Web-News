import { useState, useEffect } from 'react';
import { getNews } from '../helpers/getNews'

export const useFetchNews = ( category ) => {
    const [items, setItems] = useState([]);
    const [ isLoading, setIsLoading ] = useState( true );

    const getItems = async() => {
        const newItems = await getNews(category);
        setItems(newItems);
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
