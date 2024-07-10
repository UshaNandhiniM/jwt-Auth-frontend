import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ResetPassword = () => {
  const [newpassword, setNewPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();

  const navigate = useNavigate();
  const { id, } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { newpassword, confirmpassword };
    try {
      const response = await axios.post(
        `https://jwt-auth-backend-cauq.onrender.com/api/user/reset-password/${id}`,
        payload
      );
      if (response.status == 200) {
        toast.success(response.data.Message);
        navigate("/login");
      }
    } catch (error) {
      //console.log(error);
      toast.error(error.response.data.Message);
    }
  };

  return (
    <div>
      <div className="container login">
        <br />
        <br />
        <div className="row g-4 d-flex justify-content-center">
          <div className="col-6 ">
            <div className="card">
              <div className="card-body">
                <legend>Reset Password</legend>
                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      type="password"
                      id="newPassword"
                      name="newPassword"
                      placeholder="Enter New Password"
                      required
                      onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <label htmlFor="floatingInput">New Password</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      className="form-control"
                      type="password"
                      id="conPassword"
                      name="conPassword"
                      placeholder="Confirm New Password"
                      required
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Confirm Password</label>
                  </div>
                  <button type="submit" className="btn btn-success">
                    Update
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;