import { NewsGrid } from "../components/NewsGrid";

export const CategoryPage = ({category}) => {

  return (
    <div className="justify-content-center mx-5">
      <NewsGrid category={category}/>
    </div>
  );
};
