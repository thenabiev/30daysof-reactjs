import { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import data from './data'

function App() {
  const [questions, setQuestion]=useState(data)
  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {
            questions.map((question)=>{
              return <SingleQuestion key={question.id} {...question}/>
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;
