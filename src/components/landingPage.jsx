import '../styles/landingPage.css';
import { Link } from "react-router-dom";
const LandingPage=()=>{
    return(
        <div className="ladmainimg">
        <div className="landingPage">

            <div className="selectLogin">
                <h1 id="idh">Library Management System</h1>
                <div className="land_img">
                    <img id="landimg1" width="100px" height="100px" src="images/adminicon.png" alt="" />
                    <img id='landimg2' width="100px" height="100px" src="images/usericon.png" alt="" />
                </div>
                <div className="btnn">
                <Link to='/admin-login' className="btn1">Admin Login</Link>
                <Link to='/user-login' className="btn2">User Login</Link>
                </div>
    


            </div>

        </div>
        </div>
    )
}
export default LandingPage;