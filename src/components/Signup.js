import React from 'react'
import { Link } from 'react-router-dom'
export default function Forms(props) {
    let stl = {
        width: '20vh', height: '20vh'
    }
    let myStyle = {
        textAlign: 'center',
    }

    return (
        <div >
            <div className='container my-5' style={myStyle} >
                <Link className="mx-5  btn btn-success" onClick={() => props.changeUser("expert")} to="/expert">
                    <img src="./expert.png" alt="" style={stl} />
                    <p>Expert</p></Link>
                <Link className="mx-5  btn btn-success" onClick={() => props.changeUser("user")} to="/expert">
                    <img src="./user.png" alt="" style={stl} />
                    <p>User</p></Link>
            </div>
        </div>
    )
}
