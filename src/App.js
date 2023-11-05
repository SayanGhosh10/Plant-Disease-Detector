import './App.css';
import Nav from './components/Nav';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { useState } from 'react';
import Alert from './components/Alert';
import Upload from './components/Upload';
import About from './components/About';
// import Landing from './components/Landing';
import Expert from './components/Expert';
import Login from './components/Login';

function App() {
  const [alert, setAlert] = useState(null);
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
    backgroundImage: `url("/farm4.jpg")`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    position: 'relative',
    minHeight: '100vh',
  }
  const [user, setUser] = useState("farmer")
  const changeUser = (us) => {
    setUser(us);
  }

  return (
    <div style={myStyle}>
      <Router >
        <Nav />
        <Alert alert={alert} />
        <div className="container" style={{ backgroundColor: "transparent" }}>
          <Routes>
            {/* <Route path="/" element = {<Landing/>}/> */}
            <Route exact path="/login" element={<Login showAlert={showAlert} />} />
            <Route exact path="/signup" element={<Signup changeUser={changeUser} />} />
            <Route path='/expert' element={<Expert user={user} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/" element={<Upload showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;