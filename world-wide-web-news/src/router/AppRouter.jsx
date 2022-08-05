import { Routes, Route } from "react-router-dom";
import { HomePage, OtherPage } from "../app/pages";
import { Header, NavbarMenu } from '../ui/components'

export const AppRouter = () => {
  return (
    <>
      <Header />
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/*" element={<OtherPage />} />
      </Routes>
    </>
  );
};
