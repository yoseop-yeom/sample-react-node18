import React, { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

import { deleteMember } from './api';  // delete 공통 함수 : api.js

const BASE_URI = '/members'

export default function MemberList() {
  const  [memberList, setMemberList] = useState([]);

  useEffect(() => {
    fetchMemberList()
  }, []);

  const fetchMemberList = () => {
    axios.get(`${BASE_URI}`)
    .then((response) => {
      setMemberList(response.data);
    })
    .catch((error) => {
      console.log("Error while fetching books:", error);
    });
  }

  const handleDeleteConfirm = (id) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      deleteMember(id)            // delete 공통 함수 호출 : api.js
      .then(() => {
        console.log("member deleted successfully.");
        fetchMemberList();
      })
      .catch((error) => {
        console.log("Error while deleting member:", error);
      });
    }
  }

  return (
      <div className="container">
        <h2 className="text-center mt-5 mb-3">member 목록</h2>
        <div className="card">
          <div className="card-header">
            <Link className="btn btn-outline-primary mx-1" to="/">Home</Link>
            <Link className="btn btn-outline-primary mx-1" to="/add">member 등록</Link>
          </div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
              <tr>
                <th>ID</th>
                <th>EMAIL</th>
                <th width="220px">Action</th>
              </tr>
              </thead>
              <tbody>
              {memberList.map((member, key)=>{
                return (
                    <tr key={key}>
                      <td>{member.id}</td>
                      <td>{member.email}</td>
                      <td>
                        <Link to={`${BASE_URI}/${member.id}`} className="btn btn-outline-info mx-1">상세</Link>
                        <button onClick={()=>handleDeleteConfirm(member.id)} className="btn btn-outline-danger mx-1">삭제</button>
                      </td>
                    </tr>
                );
              })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
}