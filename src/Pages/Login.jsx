import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };
    await axios
      .post("http://jwt-auth-backend-cauq.onrender.com//api/user/login-user", payload)
      .then((res) => {
        toast.success(res.data.message);
        setToken(res.data.token);
        navigate("/Profile");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-center h-100">
          <div className="card signin">
            <div className="card-header">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="card-body">
              <label className="labels">Email</label>
              <div className="input-group form-group">
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <br />
              <label className="labels">Password</label>
              <div className="input-group form-group">
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br />
              <div className="form-group text-center">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                Don't have an account?<Link to="/register">Register</Link>
              </div>
              <div className="d-flex justify-content-center links">
                <Link to="/forgetpassword">Forgot your password?</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
