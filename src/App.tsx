import React, { useState } from 'react';
import Header from './components/Header';


function App() {
  const [notes,setNotes] = useState<{
    id: string,
    title: string,
    text: string,
    color: string,
    date: string
  }[]>([{
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
