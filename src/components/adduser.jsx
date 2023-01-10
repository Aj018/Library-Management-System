import { useState } from "react"
import { useNavigate } from "react-router-dom"
const AddUser = () => {
    let[name,setName]=useState("")
    let[email,setEmail]=useState("")
    let[age,setAge]=useState("")
    let[phoneNumber,setPno]=useState("")
    let navigate = useNavigate()
    let handleClick =(e)=>{
        e.preventDefault();
        //data to be posted
        let userData = {name,email,age,phoneNumber}

        //posting data to server
        
        fetch('http://localhost:3001/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert("user added Successfully")
        navigate('/admin/user-list')
    }
    

    return (
        <div className="addUser">
            <h1>Add a New User</h1>
            <div className="form">
                <form onSubmit={handleClick}>
                    <div className="name">
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="User Name"/>
                    </div>
                    <div className="email">
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
                    </div>
                    <div className="age">
                        <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" min='18'placeholder="age"/>
                    </div>
                    <div className="phone number">
                        <input value={phoneNumber} onChange={(e)=>setPno(e.target.value)} type="tel" minLength='10' maxLength='10' placeholder="Phone Number"/>
                    </div>
                    <button>Add User</button>
                </form>
            </div>

        </div>
    );
}

export default AddUser;