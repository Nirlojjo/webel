import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { logout } from "../actions/userActions";

function Header({ setSearch }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };

  useEffect(() => {}, [userInfo]);
  const profilepic = localStorage.getItem("profilepic");
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      style={{
        border: "none",
        width: "100%",
        zIndex: "1",
      }}
    >
      <Container>
        <Link to="/">
          <Navbar.Brand>Webel</Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto"></Nav>
          <Nav className="xyz">
            {userInfo ? (
              <>
                <NavDropdown
                  title={`${userInfo.name}`}
                  id="collasible-nav-dropdown"
                >

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Item href="">
                  <img
                    src={profilepic}
                    style={{
                      height: "37px",
                      width: "37px",
                      borderRadius: "50%",
                    }}
                  />
                </Nav.Item>
              </>
            ) : // <Nav.Link href="/login">Login</Nav.Link>
            null}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
