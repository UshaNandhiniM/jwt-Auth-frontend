import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  
  const [password, setPassword] = useState("");
 
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const payload = { username, email, password,role };


    await axios
      .post("http://jwt-auth-backend-cauq.onrender.com/api/user/register-user", payload)
      .then((res) => {toast.success(res.data.message)
  })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
       
      });
      setEmail('')
      setPassword('')
      setUserName('')
      
      
    navigate("/login");

  };

  return (
    <div>
      <br/>
      <br/>
      <form onSubmit={handlesubmit}>
        <div className="d-flex justify-content-center h-100">
          <div className="card signup">
            <div className="card-header">
              <h3 className="text-center">Register</h3>
            </div>
            <div className="card-body">
            <label className="labels">Name</label>
            <div className="input-group form-group">
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
            <br />
              <label className="labels">Email</label>
              <div className="input-group form-group">
                <input
                  type="text"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <br />
              <label className="labels">Password</label>
              <div className="input-group form-group">
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <br />
              <br />
               <button type="button" className="btn btn-primary" ><Link to="/">Back</Link></button>
              <button type="submit" className="btn btn-primary">
                Register
              </button>
             
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Already Registered?<Link to="/login">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default Register;
