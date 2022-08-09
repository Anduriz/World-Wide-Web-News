export const getNews = async () => {
    const url = `https://newsapi.org/v2/everything?q=Apple&from=2022-08-08&sortBy=popularity&pageSize=20&page=1&apiKey=fc56d826dbd64ed9af938e1797499a97`;
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