import { Routes, Route, Navigate } from "react-router-dom";
import { CategoryPage, NewsItemPage, SearchPage } from "../pages/@index";
import { Footer, Header, NavbarMenu } from '../../ui/components'
import logo from '../../assets/logo.png';

export const AppRoutes = () => {

  return (
    <div className="backgroundColorTheme">
      <div className='d-flex justify-content-center align-items-center'>
        <img src={logo} style={{height:'3rem', marginRight:'1rem'}} alt="" />
        <Header/>
      </div>
      <NavbarMenu />
      <div className="justify-content-center m-4">
        <Routes>
          <Route path="general" element={<CategoryPage category="general" />} />
          <Route path="technology" element={<CategoryPage category="technology" />}/>
          <Route path="science" element={<CategoryPage category="science" />} />
          <Route path="entertainment" element={<CategoryPage category="entertainment" />} />
          <Route path="sports" element={<CategoryPage category="sports" />} />
          <Route path="/:category/:id" element={<NewsItemPage />} />
          <Route path="/:keyword" element={<SearchPage />} />
          <Route path='/*' element={ <Navigate to="/news/general" /> } />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
};
