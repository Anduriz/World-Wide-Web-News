import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Header } from '../../ui/components';

export const LoginPage = () => {
  return (
    <>
      <Header />
      <div className="d-flex justify-content-center m-4">
        <Card style={{ width: '20rem' }} className="d-flex justify-content-center">
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button href="./" variant="primary" type="submit" className='w-100'>
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>      
      </div>
    </>
  )
}
