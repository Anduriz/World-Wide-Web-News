import { v4 as uuidv4 } from 'uuid';
import { newsApi } from "../../../@api/newsApi";
import { setNews, startLoadingNews } from "./newsSlice";

export const getNews = ({ page = 0, category = 'general' }) => {

    return async ( dispatch, getState ) => {
        dispatch(startLoadingNews());
        // console.log(category);
        // TODO: realizar peticion http con fetch
        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
        // const data = await resp.json();
        // console.log(data);

        // TODO: realizar peticion http con axios
        const {data} = await newsApi.get(`top-headlines?language=en&category=${category}&pageSize=20&page=${page}&apiKey=0fa9e54a2a8d47eab3bc911ae7779830`);

        const news = (data.articles).map( article => ({
            uniqueID: uuidv4(),
            title: article.title,
            description: article.description,
            content: article.content,
            urlToImage: article.urlToImage,
            source: article.source,
            url: article.url
        }))

        dispatch(setNews({news: news, page: page + 1}));

    }
}