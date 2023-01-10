import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
const AddBook = () => {
    //title,categories,pageCount,shortDescription,longDescription
    let [title,setTitle] = useState("");
    let [categories,setCategory] = useState("");
    let [authors,setAuthor] = useState("");
    let [pageCount,setPage] = useState("");
    let [shortDescription,setShort] = useState("");
    let [longDescription,setLong] = useState("");
    let [thumbnailUrl,setUrl] = useState("");
    let navigate = useNavigate()
    let handleSubmit = (e) =>{
        e.preventDefault();
        //data to be posted
        let bookData = {title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}

        //posting data to server
        
        fetch('http://localhost:3001/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert("book added Successfully")
        navigate('/admin/book-list')
    }
    

    return (
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="form">
                <form action="" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required placeholder="title of the book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e) => setAuthor(e.target.value)} type="text" required placeholder="Author of the book" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e) => setCategory(e.target.value)} type="text" required placeholder="Categorie of the book" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e) => setPage(e.target.value)} type="text" required placeholder="PageCount of the book" />
                    </div>
                    <div className="shortDescription">
                        <input value={shortDescription} onChange={(e) => setShort(e.target.value)} type="text" required placeholder="Short Desc of the book" />
                    </div>
                    <div className="longDescription">
                        <input value={longDescription} onChange={(e) => setLong(e.target.value)} type="text" required placeholder="Long Desc of the book" />
                    </div>
                    <div className="thumbnailUrl">
                        <input value={thumbnailUrl} onChange={(e) => setUrl(e.target.value)} type="text" required placeholder="img of the book" />
                    </div>
                    <button className="btn btn-success">Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;