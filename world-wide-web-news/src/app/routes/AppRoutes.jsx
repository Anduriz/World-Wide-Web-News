import { Routes, Route } from "react-router-dom";
import { HomePage, CategoryPage, ErrorPage } from "../pages/@index";
import { Header, NavbarMenu } from '../../ui/components'
import { NewsPage } from "../pages/NewsPage";

export const AppRoutes = () => {
  return (
    <>
      <Header />
      <NavbarMenu />
      <div className="justify-content-center m-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technology" element={<CategoryPage category="technology" />}/>
          <Route path="/science" element={<CategoryPage category="science" />} />
          <Route path="/entertainment" element={<CategoryPage category="entertainment" />} />
          <Route path="/sports" element={<CategoryPage category="sports" />} />
          <Route path="/news" element={<NewsPage/>} />
          <Route path="/*" element={<ErrorPage/>} />
        </Routes>
      </div>
    </>
  );
};
