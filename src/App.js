import './App.css';
import Nav from './components/Nav';
import Forms from './components/Forms';
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes,
  // Link
} from "react-router-dom";
import { useState } from 'react';
import Alert from './components/Alert';
import Upload from './components/Upload';
import About from './components/About';
// import Landing from './components/Landing';
import Farmer from './components/Farmer';
import Expert from './components/Expert';

function App() {
  const [alert, setAlert] =  useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  let myStyle = {
    backgroundImage : `url("/farm4.jpg")`,
    height:'200vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  }
  return (
      <div style={myStyle}>
            <Router >
                <Nav/>
                <Alert alert = {alert}/>
                <div className="container" style={{backgroundColor : "transparent"}}>
                    <Routes>
                          {/* <Route path="/" element = {<Landing/>}/> */}
                          <Route path='/user' element={<Farmer showAlert = {showAlert} />}/>
                          <Route exact path="/login" element = {<Forms/>}/>
                          <Route path='/expert' element={<Expert showAlert = {showAlert} />}/>
                          <Route exact path="/about" element = {<About/>}/>
                          <Route exact path="/" element = {<Upload showAlert = {showAlert}/>}/>
                      </Routes>
                  </div>
              </Router>
      </div>
  );
}

export default App;