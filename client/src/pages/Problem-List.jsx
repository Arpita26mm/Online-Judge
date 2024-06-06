import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const ProblemList = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const getProblemList = async () => {
      const { data } = await axios.get("http://localhost:5000/api/problems");
      setProblems(data);
    };
    getProblemList();
  }, []);

  return (
    <div>
      <h1>Problem List</h1>
      <ul>
        {problems.map((curProblem) => (
          <li key={curProblem._id}>
            <Link to={`/problem-list/${curProblem._id}/problem-solve`}>
              {curProblem.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
