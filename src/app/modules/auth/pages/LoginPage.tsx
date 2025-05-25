import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

// Formik validation
import { GoogleLogin } from '@react-oauth/google';
import useLogin from '../hooks/useLogin';

// import images

const LoginPage = () => {
  const { loginWithCredentials } = useLogin();

  //meta title
  document.title = "Login | Echadospa'lante";

  // Form validation

  return (
    <div>
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col xl={6}>
            <div className=" h-100 d-flex justify-content-center">
              <img src="/Content-team.svg" width="80%" className="" alt="" />
            </div>
          </Col>
          <Col xl={6} sm={12}>
            <div className="auth-full-page-content p-md-5 p-4">
              <div className="mx-auto">
                <div className="d-flex flex-column h-100">
                  <div className="mb-4 mb-md-5">
                    <Link to="/" className="d-block auth-logo">
                      <img
                        alt=""
                        src=""
                        height="18"
                        className="auth-logo-dark"
                      />
                      <img
                        alt=""
                        src=""
                        height="18"
                        className="auth-logo-light"
                      />
                    </Link>
                  </div>
                  <div className="my-auto">
                    <div>
                      <img src="/logo-full.jpeg" width={300} alt="" />
                      <h5 className="text-success mt-5">
                        Te Damos la Bienvenida!
                      </h5>
                      <p className="text-muted">
                        Ingresa con tu cuenta de Google
                      </p>
                    </div>
                    <GoogleLogin
                      onSuccess={(credentialResponse) => {
                        if (!credentialResponse.credential) return;
                        console.log({ TOKEN: credentialResponse.credential });
                        loginWithCredentials(credentialResponse.credential);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default LoginPage;
