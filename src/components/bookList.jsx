import { useEffect } from "react";
import { useState } from "react";
import '../styles/bookList.css'
import { useNavigate } from "react-router-dom";
const BookList = () => {

    let [book,setBooks]=useState([])
    

useEffect(()=>{
    let fetchdata=async()=>{
        let responce= await fetch('http://localhost:3001/books')
        let data= await responce.json()
        setBooks(data)
    }
    fetchdata()
},[])

let handledelete=(id,title)=>{
    fetch(`http://localhost:3001/books/${id}`,{
        method:'DELETE'
    });
    alert(`${title}will be deleted permenetly`)

}
let navigate=useNavigate()
let read =(id,title)=>{
    navigate(`/admin/book-list/${id}`,{
        
    });
    alert(`${title}will be deleted permenetly`)

}



    return ( 
        <div className="bookList">
            <h1 style={{color:'purple',fontFamily:"cursive"}}><b><ins>Book List</ins></b></h1>

            {book.map((data)=>(
                <div className="book_detail">
                    
                    <h1><b>Title:&nbsp;&nbsp;{data.title}</b></h1>
                    <h2><b>Authors:&nbsp;&nbsp;{data.authors}</b> </h2>
                    <h2><b>PageCount:&nbsp;&nbsp;{data.pageCount}</b></h2>
                    <h2><b>Categories:&nbsp;&nbsp;{data.categories}</b></h2>
                    <img id="bkimg" width="180px" height="220px" src={data.thumbnailUrl} alt="" /> <br /><br />

                    <button id="blistbtn1" onClick={()=>read(data.id)}>Read More</button>

                    <button id="blistbtn" onClick={()=>handledelete(data.id,data.title)}>Delete</button>
                   
                </div>
            ))}
            
         
            
        </div>
     );
}
 
export default BookList;