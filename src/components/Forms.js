import React from 'react'
import { Link } from 'react-router-dom'
export default function Forms(props) {
    let stl = {
        width: '20vh', height: '20vh'
    }
  return (
    
    <div>
        <div>
            <Link className="mx-3 my-3 btn btn-success" to="/expert" style={{margin : '10px'}} >
            <img src="./expert.png" alt="" srcset="" style={stl} />
            <p>Expert</p></Link>
        </div>
        <div className='my-5'>
            <Link className="mx-3 my-3 btn btn-success" to="/user">
            <img src="./user.png" alt="" srcset="" style={stl} /> 
            <p> User</p></Link>
        </div>
    </div>
  )
}
