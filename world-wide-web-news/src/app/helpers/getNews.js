import { v4 as uuidv4 } from 'uuid';

export const getNews = async ( category ) => {
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=bacb85187ccd432ea9ebf9836de8118e`
    const resp = await fetch(url);
    const { articles } = await resp.json();

    const news = articles.map( article => ({
        uniqueID: uuidv4(),
        title: article.title,
        description: article.description,
        content: article.content,
        urlToImage: article.urlToImage,
        source: article.source,
        url: article.url
    }))

    //console.log(articles);

    return news;
  };