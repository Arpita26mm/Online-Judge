import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//import Problem from "./models/Problem-model";

export const ProblemSolve = () => {
  return <h1>Problem Solved</h1>;
};

// const ProblemSolve = () => {
//   const { id } = useParams();
//   const [problem, setProblem] = useState({});
//   const [language, setLanguage] = useState("javascript");
//   const [code, setCode] = useState("");
//   const [input, setInput] = useState("");
//   const [output, setOutput] = useState("");
//   const [verdict, setVerdict] = useState("");

//   useEffect(() => {
//     const fetchProblem = async () => {
//       const { data } = await axios.get(`/api/problems/${id}`);
//       setProblem(data);
//     };
//     fetchProblem();
//   }, [id]);

//   const handleRun = () => {
//     // Implement code execution logic here
//   };

//   const handleSubmit = () => {
//     // Implement submission logic here
//   };

//   return (
//     <div>
//       <h1>{problem.title}</h1>
//       <p>{problem.description}</p>
//       <select value={language} onChange={(e) => setLanguage(e.target.value)}>
//         <option value="javascript">JavaScript</option>
//         <option value="python">Python</option>
//         <option value="java">Java</option>
//         <option value="cpp">C++</option>
//       </select>
//       <textarea
//         value={code}
//         onChange={(e) => setCode(e.target.value)}
//         placeholder="Write your code here"
//       ></textarea>
//       <textarea
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         placeholder="Input"
//       ></textarea>
//       <textarea
//         value={output}
//         onChange={(e) => setOutput(e.target.value)}
//         placeholder="Output"
//         readOnly
//       ></textarea>
//       <button onClick={handleRun}>Run</button>
//       <button onClick={handleSubmit}>Submit</button>
//       <p>{verdict}</p>
//     </div>
//   );
// };

// export default ProblemSolve;
