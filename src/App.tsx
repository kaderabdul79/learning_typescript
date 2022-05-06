import React, { useState } from 'react';
import Header from './components/Header';
import {Note} from './models/note.model';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    </div>
  );
}

export default App;
