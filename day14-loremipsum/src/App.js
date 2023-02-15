import { useEffect, useState } from 'react';
import data from './data'

function App() {

  const [count, setCount]=useState(0);
  const [text, setText]=useState([]);

  useEffect(()=>{
    if(count>=data.length){
      setCount(data.length)
    }
    if(count<=0){
      setCount(0)
    }
  },[count])

  const handleSubmit=(e)=>{
    e.preventDefault();
    let amount=parseInt(count);

    if(count<=0){
      amount=1
    }
    if(count>data.length){
      amount=data.length
    }
    setText(data.slice(0, amount))
    setCount(0)
  }
  return (
    <div className="App container my-5">
      <h2 className='text-center mb-5'>Lorem Ipsum Generator</h2>
      <form 
      onSubmit={handleSubmit}
      className="formContainer my-3 mx-auto" style={{maxWidth:"500px"}}>
        <div className="input-group ">
          <input 
          value={count}
          onChange={(e)=>setCount(e.target.value)}
          placeholder='Paragraphs...' 
          type="number" 
          className="form-control" />
          <button 
          type='submit'
          className="btn btn-dark">Generate</button>
        </div>
      </form>
      <article  style={{maxWidth:"500px"}} className="mx-auto text-center my-5">
        {
          text.map((item, index)=>{
            return(
              <p key={index}>
                {item}
              </p>
            )
          })
        }
      </article>
    </div>
  );
}

export default App;
