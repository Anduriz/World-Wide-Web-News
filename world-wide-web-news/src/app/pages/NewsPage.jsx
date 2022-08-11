import { useParams } from "react-router-dom"
import { useFetchNewsByTitle } from "../hooks/useFetchNewsByTitle";

export const NewsPage = () => {

  const { category, title } = useParams();

  const { items, isLoading } = useFetchNewsByTitle(category, title);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center"></div>
      ) : (
        <>
          <h3>{items[0].title}</h3>
          <p>{items[0].description}</p>
          <p>{items[0].content}</p>
        </>
      )
      }
    </>
  )
}
