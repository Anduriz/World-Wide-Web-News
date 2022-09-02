import { v4 as uuidv4 } from 'uuid';
import { newsApi } from "../../../@api/newsApi";
import { setNews, startLoadingNews } from "./newsSlice";

const getNews = ({ page = 0, category = 'general' }) => {

    return async ( dispatch, getState ) => {
        dispatch(startLoadingNews());

        // TODO: realizar peticion http con axios
        const {data} = await newsApi.get(`top-headlines?language=en&category=${category}&pageSize=20&page=1&apiKey=fc56d826dbd64ed9af938e1797499a97`);

        const news = (data.articles).map( article => ({
            uniqueID: uuidv4(),
            title: article.title,
            description: article.description,
            content: article.content,
            urlToImage: article.urlToImage,
            source: article.source,
            url: article.url
        }))

        dispatch(setNews({news: news, page: page}));

    }
}

const getNewsByKeyword = ({page = 0, keyword = ''}) => {

    return  async (dispatch, getState) => {
        dispatch(startLoadingNews());

        const {data} = await newsApi.get(`top-headlines?q=${keyword}&language=en&pageSize=20&page=1&apiKey=fc56d826dbd64ed9af938e1797499a97`);

        const news = (data.articles).map( article => ({
            uniqueID: uuidv4(),
            title: article.title,
            description: article.description,
            content: article.content,
            urlToImage: article.urlToImage,
            source: article.source,
            url: article.url
        }))

        dispatch(setNews({news: news, page: page}));

    }
}

export {getNews, getNewsByKeyword};