export const getNews = async () => {
    const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-08-08&sortBy=popularity&apiKey=bacb85187ccd432ea9ebf9836de8118e`;
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