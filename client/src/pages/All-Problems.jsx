import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../store/auth";
//import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

export const AllProblems = () => {
  const [problems, setProblems] = useState([]); //problems is an empty array initially so has index associated with it
  //const history = useNavigate();
  const { authorizationToken } = useAuth();

  useEffect(() => {
    const getAllProblemsData = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/probs", {
          headers: {
            Authorization: authorizationToken, //for authorisation
          },
        });
        setProblems(data);
      } catch (error) {
        console.error("Error fetching problems data:", error);
        // Optionally, you can handle specific error scenarios here
        // For example:
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error("Response data//////////:", error.response.data);
          console.error("Response status////////////:", error.response.status);
          console.error(
            "Response headers/////////////:",
            error.response.headers
          );
        } else if (error.request) {
          // The request was made but no response was received
          console.error("Request data///////////:", error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error("Error message//////:", error.message);
        }
      }
    };
    getAllProblemsData();
  }, []);

  const deleteProblem = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/admin/probs/delete-prob/${id}`,
        {
          headers: {
            Authorization: authorizationToken, //for authorisation
          },
        }
      ); //DB se delete kr diya
      setProblems(problems.filter((problem) => problem._id !== id)); //front end se bi hata diya
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1>All Problems</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>
                  <h1>Problem Title</h1>
                </th>
                <th>
                  <h1>Update</h1>
                </th>
                <th>
                  <h1>Delete</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              {problems.map((curProblem, index) => {
                return (
                  //we are returning a single row one by one as per map
                  <tr key={index}>
                    <td>
                      <h2>{curProblem.title}</h2>
                    </td>
                    <td>
                      <h2>
                        <Link
                          to={`/admin/all-problems/${curProblem._id}/edit-problem`}
                        >
                          {curProblem.title}
                        </Link>
                      </h2>
                    </td>

                    <td>
                      <h2>
                        <Link
                          to={`/admin/all-problems/${curProblem._id}/edit-problem`}
                        >
                          Edit
                        </Link>
                      </h2>
                    </td>
                    <td>
                      <button onClick={() => deleteProblem(curProblem._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};
