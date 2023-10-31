import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Indian_states_cities_list from "indian-states-cities-list";

function Expert(props) {
    const [credential, setCredential] = useState({ name: "", email: "", password: "" })

    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = 'http://localhost:5000/api/auth/createuser';
        const response = await fetch(url, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name: credential.name, email: credential.email, password: credential.password }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authToken);
            props.showAlert("Account Created Successfully", "success");
            navigate("/");
        }
        else {
            props.showAlert("User Already Exists", "danger");
        }
    }

    const [state, setState] = useState("WestBengal");
    const passAlert = () => {
        props.showAlert("Your form has been submitted", "success");
    }
    let stl = {
        color: 'white',
    }
    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div className="container">
                <h1 className='mt-3' style={{  color: 'white' }}>Please fill your details</h1>
                <h1 className='mt-3' style={{  color: 'white' }}>Expert Section</h1>
                <form className="row g-3 my-3" onSubmit={handleSubmit}>
                    <div className="row g-3">
                        <div className="col">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" name="name" onChange={onChange} required />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label" style={stl}>Email</label>
                        <input type="email" className="form-control" id="email" placeholder="abc@gmail.com" name="email" onChange={onChange} required />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="password" className="form-label" style={stl}>Password</label>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} required />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress" className="form-label" style={stl}>Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="inputAddress2" className="form-label" style={stl}>Landmark</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, Store, or Club" />
                    </div>
                    <div className="col-12">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label" style={stl}>Qualifications</label>
                        <input className="form-control" type="text" placeholder="" aria-label="default input example" required />
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputState" className="form-label" style={stl}>State</label>
                        <select id="inputState" className="form-select" onChange={(e) => { setState(e.target.value) }}>
                            <option value>Choose...</option>
                            {Indian_states_cities_list.STATES_OBJECT.map((state) => { return <option key={state.name}>{state.name}</option> })}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputCity" className="form-label" style={stl}>City</label>
                        <select id="inputCity" className="form-select">
                            <option value>Choose...</option>
                            {Indian_states_cities_list.STATE_WISE_CITIES[state].map((city) => { return <option key={city.label}>{city.label}</option> })}
                        </select>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="inputZip" className="form-label" style={stl}>Zip</label>
                        <input type="number" className="form-control" id="inputZip" />
                    </div>
                    <div className="col-12">
                    </div>
                    <div className="col-12">
                        <button type="submit" onClick={passAlert} className="my-3 btn btn-success">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Expert
