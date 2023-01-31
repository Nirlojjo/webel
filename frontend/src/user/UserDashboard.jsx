import React, { useEffect, useState } from "react";
import MainScreen from "../components/MainScreen";
import { Accordion, Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const UserDashboard = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const notice = localStorage.getItem("notices");
    if (notice) {
      setNotice(JSON.parse(notice));
    }
  }, []);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      <h1>User Dashboard</h1>
      <div
        className="cardWrapper"
        style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}
      >
        {notice &&
          notice.map((note) => (
            <Accordion key={note._id}>
              <Card style={{ margin: 10 }}>
                <Card.Header style={{ display: "flex" }}>
                  <Link
                    to="#"
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      alignSelf: "center",
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {note.title}
                    </Accordion.Toggle>
                  </Link>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <img
                      src={note.pic}
                      alt={note.title}
                      style={{ width: "100%" }}
                    />
                    <footer className="blockquote-footer">
                      Created on{" "}
                      <cite title="Source Title">{note.createdAt}</cite>
                    </footer>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          ))}
      </div>
    </MainScreen>
  );
};

export default UserDashboard;
