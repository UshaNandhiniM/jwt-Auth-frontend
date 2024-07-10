import React, { useEffect, useState } from "react";
import axios from "axios";
import Shortener from "./Shortener";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Profile = ({ token }) => {
  const [resdata, setResdata] = useState([]);
  
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    await axios
      .get("http://jwt-auth-backend-cauq.onrender.com/api/user/get-user", {
       
        headers: {
           'Content-Type':"application/json",
          'Authorization': `Bearer ${token}`
        },
      })
      .then((res) => {
        setResdata(res.data.data);
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };
  return (
    <div>
      {resdata.map((ele, index) => {
        return (
          <div key={index}>
            <div className="col">
              <div className="card px-3 py-4 shadow-sm">
                <p>Profile</p>
                <div className="card-header">{ele.username}</div>
                <div className="card-body">
                  <h5 className="card-title">{ele.email}</h5>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <Shortener />
    </div>
  );
};

export default Profile;
