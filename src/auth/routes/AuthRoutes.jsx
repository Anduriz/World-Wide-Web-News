import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from '../pages';
import { Header } from '../../ui/components';
import Card from 'react-bootstrap/Card';
import cityBackground from '../../assets/city-background.jpg';
import logo from '../../assets/logo.png';
import '../styles/AuthStyles.css';

export const AuthRoutes = () => {
  return (
    <>
      <div className="background-image vh-100" style={{ backgroundImage:`url(${cityBackground})` }}></div>
      <div className="
        auth-container 
        container
        d-flex 
        align-items-center 
        justify-content-center 
        vh-100"
      >
        <Card className='auth-card d-flex vw-100 mx-1'>
          <div className="card-header pt-4" >
            <div className='d-flex justify-content-center mb-3'>
              <img src={logo} className="w-25" alt="" />
            </div>
            <Header />
          </div>
          <Card.Body>

            <Routes>
                <Route path="login" element={ <LoginPage /> } />
                <Route path="register" element={ <RegisterPage /> } />

                <Route path='/*' element={ <Navigate to="/auth/login" /> } />
            </Routes>
          
          </Card.Body>
        </Card>      
      </div>
    </>
  )
}

  