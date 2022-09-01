import Spinner from 'react-bootstrap/Spinner';

export const CheckingLoading = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
        <Spinner animation="border" variant="info" style={{ width: "5rem", height: "5rem" }}/>
    </div>
  );
};
