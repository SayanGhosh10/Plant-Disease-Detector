import React, { useState } from 'react';

function Upload(props) {
  const [file, setFile] = useState(null);
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
const mediaQueries = {
  desktop: '@media (min-width: 1024px)',
  android : '@media (max-width: 768px)',
};
let myStyle = {
  width: "50%",
  position: "center",
  maxWidth: "500px",
}
if (window.matchMedia(mediaQueries.desktop).matches) {
  myStyle.maxWidth = '800px';
}
if (window.matchMedia(mediaQueries.android).matches) {
  myStyle.maxWidth = '250px';
}
let stl = {
  color : 'white',
}
  return (
    <div className='container'>
      
        <h1 className="my-5" style={stl} >Analyze your Plant here</h1>
            <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={stl}>Name of Plant</label>
                    <input className="form-control" type="text" placeholder="" aria-label="default input example"/>
            </div>
            <div className="mb-3">
            <form className="row g-3 my-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={stl}>Enter Location</label>
            
            <div className="col-md-6">
                <label htmlFor="inputState" className="form-label" style={stl}>State</label>
                <select id="inputState" className="form-select">
                <option value>Choose...</option>
                <option>West Bengal</option>
                <option>Uttar Pradesh</option>
                <option>Bihar</option>
                </select>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label" style={stl}>City</label>
                <select id="inputCity" className="form-select">
                <option value>Choose...</option>
                <option>Howrah</option>
                <option>Kolkata</option>
                <option>Hoogly</option>
                </select>
            </div>
            </form>
            </div>
            <div>
              <p style={stl}>Upload Image</p>
              <input className="form-control" type="file" onChange={handleChange} />
              <div className="text-center">
              <img  style={myStyle} className='image my-5' src={file} />
              </div>
            </div>
            
            <button type="submit" onClick={passAlert} className="my-3 btn btn-success text-center">Analyze</button>
    </div>
  )
}

export default Upload
