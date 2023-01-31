import React, { useEffect, useState } from "react";
import MainScreen from "../components/MainScreen";
import { Accordion, Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const AdminDashboard = () => {
  const [notice, setNotice] = useState([]);

  useEffect(() => {
    const notice = localStorage.getItem("notices");
    if (notice) {
      setNotice(JSON.parse(notice));
    }
  }, []);
  const deleteHandler = (id) => {
    const updatedNotices = notice.filter((item) => item._id !== id);
    setNotice(updatedNotices);
    localStorage.setItem("notices", JSON.stringify(updatedNotices));
  };
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      <h1>Admin Dashboard</h1>
      <Link to="newnotice">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create a new Notice
        </Button>
      </Link>
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
                  <div>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      <img src="https://i.ibb.co/p0Gctkx/imageedit-2-2268632456.png" style={{ width: "32px" }} />
                    </Button>
                  </div>
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

export default AdminDashboard;