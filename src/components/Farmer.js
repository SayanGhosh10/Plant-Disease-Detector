import React from 'react'

function Farmer(props) {
    const passAlert = () => {
        props.showAlert("Your form has been submitted", "success");
}
let stl = {
    color : 'white',
  }
  return (
    <div>
      <div className="container">
            <h1 style={{paddingTop : 50, color : 'white'}} >Please fill your details</h1>
            <h1 style={{paddingTop : 50, color : 'white'}} >User Section</h1>
            <form className="row g-3 my-5">
            <div className="row g-3">
            <div className="col">
                <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
            </div>
            <div className="col">
                <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
            </div>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label" style={stl}>Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label" style={stl}>Password</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress" className="form-label" style={stl}>Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
            </div>
            <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label" style={stl}>Landmark</label>
                <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, Store, or Club"/>
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
            <div className="col-md-4">
                <label htmlFor="inputState" className="form-label" style={stl}>State</label>
                <select id="inputState" className="form-select">
                <option value>Choose...</option>
                <option>West Bengal</option>
                <option>Uttar Pradesh</option>
                <option>Bihar</option>
                </select>
            </div>
            <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label" style={stl}>Zip</label>
                <input type="number" className="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
            </div>
            {/* <div className="col-12">
                <button type="submit" onClick={props.passAlert} className="btn btn-dark">Sign Up</button>
            </div> */}
            </form>
            <button type="submit" onClick={passAlert} className="my-3 btn btn-success">Sign Up</button>
        </div>
    </div>
  )
}

export default Farmer
