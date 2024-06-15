import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const DashBoard = () => {
    const userName = window.localStorage.getItem("userName");
    const navigate = useNavigate();

    const adminLogout = () => {
        window.localStorage.clear();
        navigate("/adminuser");
    };

    return (
        <div id="adminDashboard">
            <div id="dashboardTop">
                <h1>Admin Dashboard</h1>
                <div id="dashboarddowan">
                    <h2>
                        Welcome {userName}!
                        <a 
                        href="#" onClick={adminLogout}> Logout</a>
                    </h2>
                </div>
            </div>
            <div id="adminData">
                <div id="adminLeftMenu">
                    <Link to="uploadproduct" className="adminMenu">Upload Products</Link>
                    <Link to="CustomerOrder" className="adminMenu">Customer Order</Link>
                    <Link to="UpdateProduct" className="adminMenu">Update Product</Link>
                    {/* Add more links for other features */}
                </div>
                <div id="adminRightData">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;
