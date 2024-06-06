import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CreateProblem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [testCases, setTestCases] = useState([{ input: "", output: "" }]);
  const navigate = useNavigate();

  const handleAddTestCase = () => {
    setTestCases([...testCases, { input: "", output: "" }]);
  };

  const handleTestCaseChange = (index, field, value) => {
    const newTestCases = [...testCases];
    newTestCases[index][field] = value;
    setTestCases(newTestCases);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/admin/create-prob/", {
        title,
        description,
        testCases,
      });
      // history.push("/admin-panel");
      navigate("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Create Problem</h1>
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
          <label htmlFor="testcase">testcase</label>
          {testCases.map((curTestCase, index) => (
            <div key={index}>
              <textarea
                value={curTestCase.input}
                onChange={(e) =>
                  handleTestCaseChange(index, "input", e.target.value)
                }
                placeholder="Input"
                required
              ></textarea>
              <textarea
                value={curTestCase.output}
                onChange={(e) =>
                  handleTestCaseChange(index, "output", e.target.value)
                }
                placeholder="Output"
                required
              ></textarea>
              <button type="button" onClick={handleAddTestCase}>
                Add Test Case
              </button>
            </div>
          ))}
        </div>

        <button type="submit">Create and add the problem in list</button>
      </form>
    </div>
  );
};

//export default CreateProblem;
