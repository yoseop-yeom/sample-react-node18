import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from 'axios'

const BASE_URI = '/members'

export default function BookEdit() {
  const [id, setId] = useState(useParams().id);

  const [email, setEmail] = useState('');

  useEffect(() => {
    axios.get(`${BASE_URI}/${id}`)
    .then((response) => {
      let member = response.data;
      setId(member.id);
      setEmail(member.email);
    })
    .catch(function (error) {
      console.log(error);
    })
  }, []);

  const navigate = useNavigate();

  const handleSave = (event) => {
    event.preventDefault();
    const newBook = {
      id: id,
      email: email,
    };
    axios.put(`${BASE_URI}/${id}`, newBook)
    .then((response) => {
      console.log("member edited successfully.");
      navigate("/list");
    })
    .catch((error) => {
      console.log("Error while editing member:", error);
    });
  }

  return (
      <div className="container">
        <h2 className="text-center mt-5 mb-3">member 수정</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
            <Link className="btn btn-outline-primary mx-1" to="/list">member 목록</Link>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="id">ID</label>
                <input
                    onChange={(event) => {setId(event.target.value)}}
                    value={id}
                    type="text"
                    className="form-control"
                    id="id"
                    name="id"
                    required>
                </input>
              </div>
              <div className="form-group">
                <label htmlFor="email">EMAIL</label>
                <input
                    onChange={(event) => {setEmail(event.target.value)}}
                    value={email}
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
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