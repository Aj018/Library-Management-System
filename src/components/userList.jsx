
import { useEffect } from "react";
import { useState } from "react";
import '../styles/userList.css';
const UserList = () => {

    let [user,setUsers]=useState([])


    useEffect(()=>{
        let fetchdata=async()=>{
            let responce= await fetch('http://localhost:3001/users')
            let data= await responce.json()
            setUsers(data)
        }
        fetchdata()
    },[])
    let handledelete=(id,title)=>{
        setUsers(user.filter(x=>x.id !==id))
        alert(`${title} has been deleted`)
    
    }

    return (  
        <div className="user_List">
             <h1 style={{color:'purple',fontFamily:"cursive"}}>User List</h1>

{user.map((data)=>(
    <div className="user_detail">
        
        <h1>Name:{data.name}</h1>
        <h2>Age: {data.age}</h2>
        <h2>PhoneNumber:{data.phoneNumber}</h2>
        <h2>id:{data.id}</h2>
        {/* <img width="100px" height="100px" src={data.thumbnailUrl} alt="" /> <br /><br /> */}

        <button id="ulistbtn" onClick={()=>handledelete(data.id)}>Delete</button>
    </div>
))}



        </div>
    );
}
 
export default UserList;