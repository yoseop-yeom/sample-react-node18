import React, {useState, useEffect} from 'react';
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

import { deleteMember } from './api';  // delete 공통 함수 : api.js

export default function MemberView() {
  const [id, setId] = useState(useParams().id);
  const [member, setMember] = useState({id:0, email:''});

  useEffect(() => {
    axios.get(`/${id}`)
    .then((response) => {
      setMember(response.data);
    })
    .catch((error) => {
      console.log("Error while geting member:", error);
    })
  }, []);

  const navigate = useNavigate();

  const handleDeleteConfirm = (id) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      deleteMember(id)           // delete 공통 함수 호출 : api.js
      .then(() => {
        console.log("member deleted successfully.");
        navigate("/list");
      })
      .catch((error) => {
        console.log("Error while deleting member:", error);
      });
    }
  }

  return (
      <div className="container">
        <h2 className="text-center mt-5 mb-3">member 조회</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
            <Link className="btn btn-outline-primary mx-1" to="/list">member 목록</Link>
            <Link to={`/edit/${member.id}`} className="btn btn-outline-success mx-1">수정</Link>
            <button onClick={()=>handleDeleteConfirm(member.id)} className="btn btn-outline-danger mx-1">삭제</button>
          </div>
          <div className="card-body">
            <b className="text-muted">ID:</b>
            <p>{member.id}</p>
            <b className="text-muted">email:</b>
            <p>{member.email}</p>
          </div>
        </div>
      </div>
  );
}