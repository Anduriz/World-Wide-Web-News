import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import {useDispatch, useSelector} from 'react-redux';
import { startLogout } from '../../../../@store/slices/auth/thunks';

export const UsersDropdown = ({width, expand}) => {

  const dispatch = useDispatch();

  const {email} = useSelector(state => state.auth);

  const onLogout = () => {
      dispatch(startLogout());
  }

  return (
    <div>
        <Nav className="justify-content-end">
          {/* {width >= 992 && (<BiUser className="my-auto"/>)} */}
          <NavDropdown
            title={email}
            align={{ lg: 'end' }}
            id={`offcanvasNavbarDropdown-expand-${expand}`}
          >
            {/* <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Divider /> */}
            <NavDropdown.Item href="/login" onClick={onLogout}>
              Logout
            </NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
    </div>
  )
}