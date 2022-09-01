import { Routes, Route, Navigate } from "react-router-dom";
import { AppRoutes } from "../app/routes/AppRoutes";
import { AuthRoutes } from "../auth/routes/AuthRoutes.jsx";
import { useCheckAuth } from '../hooks/useCheckAuth';
import { ErrorPage } from "../app/pages/@index";
import { CheckingLoading } from "../ui/components/CheckingLoading/CheckingLoading";


export const AppRouter = () => {

  const status = useCheckAuth();
  
  if(status === 'checking'){
    return <CheckingLoading/>
  }

  return (
    <>
      <Routes>
        {
        (status === 'authenticated')
          ? 
          <>
            <Route path="/news/*" element={ <AppRoutes /> } />
            <Route path='/*' element={<Navigate to='/news'/>}/>
          </>
          : 
          <>
            <Route path="/auth/*" element={ <AuthRoutes /> }/>
            <Route path='/*' element={<Navigate to='/auth/login'/>}/> 
          </>
        }
        
      </Routes>
    </>
  );
};
