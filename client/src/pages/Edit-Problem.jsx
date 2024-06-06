import React, { useState, useEffect } from "react";
import axios from "axios";
//import { useParams } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";

export const EditProblem = () => {
  const [problem, setProblem] = useState({}); //problem = initialised as an empty object
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [testCases, setTestCases] = useState([{ input: "", output: "" }]);
  //const navigate = useNavigate();
  const params = useParams();

  console.log("params single problem:", params);
  const { authorizationToken } = useAuth();

  // const [problem, setProblem] = useState({
  //   title: "",
  //   description: "",
  //   testCases: "",
  // });

  //get single problem data
  const getSingleProblemData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/problems/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      const data = await response.json();
      console.log(`problems single data : ${data}`);
      setProblem(data);
      setTitle(data.title);
      setDescription(data.description); //i.e. phle previous data sare get krre h us id k jo phle se us id ka data database m store h
      setTestCases(data.testCases);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const getSingleProblemData = async () => {
  //     const { data } = await axios.get(
  //       //here data object= response from BE database to FE. This data object has title.descrip., testcases etc. attributes in it
  //       `http://localhost:5000/api/admin/problems/${params.id}` //jo bi all-problems page se id aara h vo h ye
  //     );
  //     setProblem(data);
  //     setTitle(data.title);
  //     setDescription(data.description); //i.e. phle previous data sare get krre h us id k jo phle se us id ka data database m store h
  //     setTestCases(data.testCases);
  //   };
  //   getSingleProblemData();
  // }, [id]);

  useEffect(() => {
    getSingleProblemData();
  }, []);

  const handleTestCaseChange = (index, field, value) => {
    const newTestCases = [...testCases];
    newTestCases[index][field] = value;
    setTestCases(newTestCases);
  };

  // to update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/probs/update-prob/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken, //for authorisation
          },
          body: JSON.stringify({
            title,
            description,
            testCases,
          }),
        }
      );
      if (response.ok) {
        toast.success("updated Successfully");
      } else {
        toast.error("Not Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await axios.patch(
  //       `http://localhost:5000/api/admin/probs/update-prob/${params.id}`, //jo bi all-problems page se id aara h vo h ye
  //       {
  //         title,
  //         description,
  //         testCases,
  //       }
  //     );
  //     // history.push("/all-problems");
  //     navigate("/admin");
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <div>
      <h1>Edit Problem</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            required
          />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="testcase">testcases</label>
          {testCases.map((testCase, index) => (
            <div key={index}>
              <textarea
                value={testCase.input}
                onChange={(e) =>
                  handleTestCaseChange(index, "input", e.target.value)
                }
                placeholder="Input"
                required
              ></textarea>
              <textarea
                value={testCase.output}
                onChange={(e) =>
                  handleTestCaseChange(index, "output", e.target.value)
                }
                placeholder="Output"
                required
              ></textarea>
            </div>
          ))}
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

//export default EditProblem;
