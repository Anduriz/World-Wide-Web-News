import { Routes, Route } from "react-router-dom";
import { CategoryPage, NewsItemPage, ErrorPage, SearchPage } from "../pages/@index";
import { Header, NavbarMenu } from '../../ui/components'

export const AppRoutes = () => {
  return (
    <div className="backgroundColorTheme">
      <Header/>
      <NavbarMenu />
      <div className="justify-content-center m-4">
        <Routes>
          <Route path="/" element={<CategoryPage category="general" />} />
          <Route path="/technology" element={<CategoryPage category="technology" />}/>
          <Route path="/science" element={<CategoryPage category="science" />} />
          <Route path="/entertainment" element={<CategoryPage category="entertainment" />} />
          <Route path="/sports" element={<CategoryPage category="sports" />} />
          <Route path="news/:category/:title" element={<NewsItemPage />} />
          <Route path="search/:keyword" element={<SearchPage />} />
          {/* <Route path="/*" element={<ErrorPage/>} /> */}
        </Routes>
      </div>
    </div>
  );
};
