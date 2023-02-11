import { useEffect } from "react";
import { useState } from "react";
import {HiChevronRight} from 'react-icons/hi'


const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setLoading]=useState(true);
  const [jobs, setJobs]=useState([]);
  const [value, setValue]=useState(2);

  const fetchJobs=async()=>{
    const response=await fetch(url);
    const newJobs=await response.json();
    setJobs(newJobs);
    setLoading(false);
  }

  useEffect(()=>{
    fetchJobs();
  },[])

  if(loading){
    return(
      <section style={{minHeight:"100vh", display:"grid", placeItems:"center"}}>
        <h1 style={{textAlign:"center"}}>Loading...</h1>
      </section>
    )
  }
  const {company, dates, duties, title}=jobs[value];
  return (
    <section className="container py-5">
      <h2 className="text-center">Expirence</h2>
      <div className="d-flex justify-content-center mt-4">
      <div className="btn-group ">
        {
          jobs.map((job, index)=>(
            <div 
            onClick={()=>setValue(index)}
            className={`btn ${index===value ? "btn-success" : "btn-outline-success"}`}
            key={index}>
              {job.company}
            </div>       
          ))
        }
      </div>
      </div>
      <article className="my-2">
        <h3>{title}</h3>
        <div className="badge bg-success mb-2">
          {company}
        </div>
        <p>{dates}</p>
        {
          duties.map((duty, index)=>(
            <p key={index}><HiChevronRight className='text-success' /> {duty}</p>
          ))
        }
      </article>
    </section>
  );
}

export default App;
