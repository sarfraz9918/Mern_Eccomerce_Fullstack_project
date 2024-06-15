import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminUser = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        let url = "http://localhost:8000/admin/checkadmin";
        axios.post(url, { name: name, password: password }).then((result) => {
            if (result.data === "Success") {
                window.localStorage.setItem("userName", name);
                navigate("/admindashboard");
            } else {
                setError("You are not registered to this service");
            }
        }).catch((error) => {
            setError("An error occurred. Please try again later.");
        });
    };
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" placeholder="Enter Username" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Enter Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="submit-button">Login</button>
            </form>
        </div>
    );
};
export default AdminUser;
