import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';

import { useForm } from '../../hooks/';
import { startGoogleSignIn, startLoginWitchEmailPassword } from '../../@store/slices/auth/thunks';

const AlertMessage = (errorMessage) => (
  <Alert variant='danger'>
    {
      (errorMessage === 'auth/internal-error') ? "auth/user-not-found" :
      errorMessage.slice(5).replace(/\w/, firstLetter => firstLetter.toUpperCase()).replace(/-/g, " ")
    }
  </Alert>
)

export const LoginPage = () => {

  const { status, errorMessage } = useSelector( state => state.auth);
  
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: '',
    password: ''
  });

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    dispatch(startLoginWitchEmailPassword({email, password}));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }

  return (
    <>
      <h5>Login</h5>
      <Form onSubmit={onSubmit}>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            name='email'
            placeholder="Enter email" 
            value = {email}
            onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          name='password'
          placeholder="Password" 
          value = {password}
          onChange={onInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Link className='link-secondary' to="/auth/register">
            Create account
          </Link>
        </Form.Group>

        {
          !!errorMessage === true ? AlertMessage(errorMessage) : ''
        }

        <ToggleButtonGroup type="checkbox" className='w-100'>
          <Button disabled={isAuthenticating} type="submit" className='w-50' variant="danger text-white">
            Login
          </Button>
          <Button disabled={isAuthenticating} className='w-50' variant="danger text-white" onClick={onGoogleSignIn}>
            Google
          </Button>
        </ToggleButtonGroup>
        
      </Form>
    </>
  )
}
