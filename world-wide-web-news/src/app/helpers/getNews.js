export const getNews = async ( category ) => {
    const url = `https://newsapi.org/v2/top-headlines?language=en&category=${category}&apiKey=bacb85187ccd432ea9ebf9836de8118e`
    const resp = await fetch(url);
    const { articles } = await resp.json();

    const news = articles.map( article => ({
        title: article.title,
        description: article.description,
        img: article.img,
        source: article.source
    }))

    //console.log(articles);

    return articles;
  };