import './App.css';
import ReactPaginate from 'react-paginate';
import './index.css';
import { useEffect, useState } from 'react';

function App() {

  const [items, setItems]=useState([]);
  const [pageCount, setPageCount]=useState(0);
  let limit=12;


  useEffect(()=>{
    const getComments= async ()=>{
      const res=await fetch(
        `http://localhost:3004/comments?_page=1&_limit=${limit}`
      );
      const data=await res.json();

      const total=res.headers.get('x-total-count');

      setPageCount(Math.ceil(total/limit))
      setItems(data)
    }
    
    getComments();
  },[]);

  const fetchComments= async (currentPage)=>{
    const res=await fetch(
      `http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data=await res.json();
    return data
  }

const handlePageClick=async (data)=>{
    let currentPage=data.selected+1;
    const commentsFromServer= await fetchComments(currentPage);
    setItems(commentsFromServer)
}

  return (
    <div className="container">

      <div className="row m-2">
      {
      items.map((item)=>(
        <div key={item.id} className="col-sm-6 col-md-4 v my-2">
          <div className="card shadow-sm w-100" style={{minHeight:"225px"}}>
            <div className="card-body">
              <h5 className="card-title h2">
                ID: {item.id}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                E-Mail: {item.email}
              </h6>
              <p className="card-text">
                Comment: {item.body}
              </p>
            </div>
          </div>
        </div>
      ))
    }
      </div>

    

      <ReactPaginate
      previousLabel='Əvvəl'
      nextLabel="Növbəti"
      breakLabel="..."
      pageCount={pageCount}
      marginPagesDisplayed={3}
      pageRangeDisplayed={3}
      onPageChange={handlePageClick}
      containerClassName={'pagination justify-content-center'}
      pageClassName='page-item'
      pageLinkClassName='page-link'
      previousClassName='page-item'
      previousLinkClassName='page-link'
      nextClassName='page-item'
      nextLinkClassName='page-link'
      breakClassName='page-link'
      activeLinkClassName='active'
       />
    </div>
  );
}

export default App;
