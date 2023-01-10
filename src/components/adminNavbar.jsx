import '../styles/adminNavbar.css';
import { Link } from 'react-router-dom';
const AdminNavbar=()=>{
    
    return(
        <div className="admin_Navbar">
            <h1 id="navh1">Admin Home</h1>

            <div className="nav_link">

                
            <Link to="/admin/">Dashboard</Link>
            <Link to="/admin/add-book">Add Books</Link>
            <Link to="/admin/add-user">Add User</Link>
            <Link to="/admin/book-list">Book List</Link>
            <Link to="/admin/user-list">User List</Link>
            <Link to="/">Logout</Link>
           
            </div>

        </div>
    )
}
export default AdminNavbar;