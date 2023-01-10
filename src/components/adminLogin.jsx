import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/adminLogin.css';

const AdminLogin=()=>{

    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let navigate=useNavigate()


    let login =(e)=>{
        e.preventDefault();
        let data={email,password}
        if(email==="admin@gmail.com" && password == 123)
        {
            navigate('/admin/')
        }else{
            alert("Invalid credentails")
        }
        console.log(data);
    }

    return(
        <div className="afimg">
            <div className="form container card mt-5 pt-3">
                <div className="admin_form">
                <h1 id="adh1">Login as Admin</h1>

                <div className="adminimg">
                    <img width="100px" height="100px" src="images/adminicon.png" alt="" />

                </div>

                <div className="form_input p-5" >

                    <form action="" onSubmit={login}>

                        <div className="email">
                        <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email address"  className="form-control"/>
                        </div><br />

                        <div className="password">
                            <input type="password" required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="enter password" className="form-control" />
                        </div>

                        <button className="admin_btn"><b>Login</b></button>

                    </form>
                </div>
             </div>
            </div>
        </div>
    )

}
export default AdminLogin