import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const BASE_URI = '/members'

export default function MemberAdd() {
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const newMember = {
      email: email,
    };
    axios.post(`${BASE_URI}`, newMember)
    .then((response) => {
      console.log("Member added successfully.");
      navigate("/list");
    })
    .catch((error) => {
      console.log("Error while adding Member:", error);
    });
  }

  return (
      <div className="container">
        <h2 className="text-center mt-5 mb-3">Member 등록</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
            <Link className="btn btn-outline-primary mx-1" to="/list">Member 목록</Link>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="title">이메일</label>
                <input
                    onChange={(event) => {setEmail(event.target.value)}}
                    value={email}
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    required>
                </input>
              </div>
              <button onClick={handleSave} type="button" className="btn btn-outline-primary mt-3">
                저장
              </button>
            </form>
          </div>
        </div>
      </div>
  );
}