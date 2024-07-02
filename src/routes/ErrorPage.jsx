import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
            <div className="card-body">
              <h1 className="card-title">Ups, I did it again</h1>
              <p className="card-text">{error.statusText || error.message}</p>
              <button className="btn btn-primary" onClick={() => navigate(-1)}>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
   
  );
};

export default ErrorPage;
