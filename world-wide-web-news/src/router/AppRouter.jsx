import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "../app/routes/AppRoutes";
import { LoginPage } from "../auth/page/LoginPage";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/*" element={<AppRoutes/>} />
      </Routes>
    </>
  );
};
