import { NewsGrid } from "../components/NewsGrid";

export const CategoryPage = ({category}) => {

  return (
    <>
      <NewsGrid category={category}/>
    </>
  );
};
