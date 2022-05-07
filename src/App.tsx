import React, { useState } from 'react';
import Header from './components/Header';
import {Note} from './models/note.model';
import NotesList from './components/NotesList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

function App() {
  const [notes,setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: "Apply for job",
    text: "Junior Full Stack Developer",
    color: "green",
    date: (new Date).toString()
  }])

  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col><NotesList notes={notes} /></Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default App;
