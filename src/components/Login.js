import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [credential, setCredential] = useState({ email: "", password: "" })
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'https://plant-desease-backend.onrender.com/api/auth/login';
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credential.email, password: credential.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Logged in Successfully", "success");
            navigate("/");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    }
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <div className="container">
            <h1 className='mt-3' style={{ color: "white" }}>Enter Credentials</h1>
            <form className='my-3' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" style={{ color: "white" }} className="form-label">Email address</label>
                    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" value={credential.email} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" style={{ color: "white" }} className="form-label">Password</label>
                    <input type="password" name="password" className="form-control" id="password" value={credential.password} onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default Login
