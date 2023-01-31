import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function LandingPage({ history }) {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log("User Info from landing/register page -- ", userInfo);

  useEffect(() => {
    if (userInfo) {
      history.push("/dashboard");
    }
  }, [history, userInfo]);

  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            Landing Page
            <div className="buttonContainer">
              User Login
              <Link to="/userlogin">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/userregister">
                <Button
                  variant="outline-primary"
                  size="lg"
                  className="landingbutton"
                >
                  Signup
                </Button>
              </Link>
            </div>

            <div className="buttonContainer">
              Admin Login
              <Link to="/adminlogin">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default LandingPage;
