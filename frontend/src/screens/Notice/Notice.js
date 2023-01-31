import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Accordion, Button, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const Notice = () => {
  const [notice, setNotice] = useState([]);
  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure? ")) {
    }
  };
  const fetchNotice = async () => {
    const { data } = await axios.get("/api/notice");
    setNotice(data);
  };
  console.log(notice);
  useEffect(() => {
    fetchNotice();
  }, []);

  return (
    <MainScreen title="Welcome Back Ankur">
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
                    <Button href={`/note/${note._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                      onClick={() => deleteHandler(note._id)}
                    >
                      Delete
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

export default Notice;
