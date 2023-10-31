import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Indian_states_cities_list from "indian-states-cities-list";

function Upload(props) {
  let navigate = useNavigate();
  const [file, setFile] = useState(null);
  const [state, setState] = useState("WestBengal");
  function handleChange(e) {
    console.log(e.target.files);
    if (e.target.files[0]) {
      setFile(URL.createObjectURL(e.target.files[0]));
    }
    else {
      setFile(null);
    }
  }
  const passAlert = () => {
    props.showAlert("Your Picture is being analyzed", "success");
  }
  let myStyle = {
    width: "50%",
    position: "center",
    maxWidth: "400px",
    maxHeight: "400px",
  }
  let stl = {
    color: 'white',
  }
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/login");
    }
})
  return (
    <div className='container'>

      <h1 className="my-5" style={stl} >Analyze your Plant here</h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label" style={stl}>Name of Plant</label>
        <input className="form-control" type="text" placeholder="" aria-label="default input example" />
      </div>
      <div className="mb-3">
        <form className="row g-3 my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label" style={stl}>Enter Location</label>

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label" style={stl}>State</label>
            <select id="inputState" className="form-select" onChange={(e) => { setState(e.target.value) }}>
              <option value>Choose...</option>
              {Indian_states_cities_list.STATES_OBJECT.map((state) => { return <option key={state.name}>{state.name}</option> })}
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label" style={stl}>City</label>
            <select id="inputCity" className="form-select">
              <option value>Choose...</option>
              {Indian_states_cities_list.STATE_WISE_CITIES[state].map((city) => { return <option key={city.label}>{city.label}</option> })}
            </select>
          </div>
        </form>
      </div>
      <div>
        <p style={stl}>Upload Image</p>
        <input className="form-control" type="file" accept="image/*" onChange={handleChange} />
        <div className="text-center">
          <img style={myStyle} className='image my-5' src={file} alt='' />
        </div>
      </div>

      <button type="submit" onClick={passAlert} className="my-3 btn btn-success text-center">Analyze</button>
    </div>
  )
}

export default Upload
