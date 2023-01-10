
import { useEffect } from 'react';
import { useState } from 'react';
import '../styles/readBook.css';
import { useParams } from 'react-router-dom';

const ReadBook = () => {

    let [read,setvalue]=useState([])

    //to get route paremeter
    let params=useParams()

    useEffect(()=>{
        let fetchdata=async()=>{
            let responce=await fetch(`http://localhost:1002/books/${params.id}`);
            let data = await responce.json()
            setvalue(data)
        }
        fetchdata()
    })
    return ( 
        <div className="readBooks">
            <h1>Books</h1>
          <h2>{read.title}</h2>
          <p>{read.shortDescription}</p>
          <p>{read.longDescription}</p>
    
        </div>
     );
}
export default ReadBook;