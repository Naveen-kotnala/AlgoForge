import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Editor from "@monaco-editor/react";


function CodeEditor(){

  const { id } = useParams();

  const [problem, setProblem] = useState(null);

  const [code,setCode] = useState("");

  const [language,setLanguage] = useState("cpp");

  const [output,setOutput] = useState("");

  const [customInput, setCustomInput] = useState("");

  const [status,setStatus] = useState("");



  // Fetch Problem

  useEffect(()=>{

    const fetchProblem = async()=>{

      try{

        const res = await axios.get(
          `http://localhost:5000/api/problems/${id}`
        );


        setProblem(res.data);


      }
      catch(error){

        console.log(error);

      }

    };


    fetchProblem();


  },[id]);





  // Load Template according to language

  useEffect(()=>{


    if(problem){


      const template =
      problem.starterCode?.[language] || "";


      setCode(template);


    }


  },[language,problem]);







  const runCode = async()=>{

      console.log("Run button clicked");


    try{


     const res = await axios.post(
  "http://localhost:5000/api/code/run",
  {
    code,
    language,
    input: customInput
  }
);
        console.log(res.data);

      setOutput(res.data.output);


    }
    catch(error){

      console.log(error);

      setOutput("Error running code");

    }


  };








  const submitCode = async()=>{


    console.log("CODE BEFORE SUBMIT:",code);



    if(!code || code.trim()===""){

      setStatus("Code is empty ❌");

      return;

    }




    try{


      const token = localStorage.getItem("token");



      const res = await axios.post(

        "http://localhost:5000/api/code/submit",

        {
          code,
          language,
          problemId:id
        },

        {
          headers:{
            Authorization:`Bearer ${token}`
          }
        }

      );



      setStatus(res.data.status);



    }
    catch(error){


      console.log(error);


      setStatus(
        error.response?.data?.message ||
        "Submission Failed ❌"
      );


    }


  };







  const fileName =
  language==="cpp"
  ?
  "Solution.cpp"
  :
  language==="java"
  ?
  "Solution.java"
  :
  "solution.py";







  if(!problem){


    return(

      <div className="
      bg-slate-950
      min-h-screen
      text-white
      flex
      justify-center
      items-center
      ">

        Loading...

      </div>

    )

  }







  return(

    <div className="
    bg-slate-950
    min-h-screen
    text-white
    ">


      <Navbar />



      <div className="
      pt-24
      px-6
      ">



      <div className="
      grid
      lg:grid-cols-2
      gap-6
      ">



      {/* Problem */}


      <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      p-6
      ">


        <h1 className="text-3xl font-bold">

          {problem.title}

        </h1>



        <span className="
        inline-block
        mt-4
        px-4
        py-1
        rounded-full
        bg-green-500/20
        text-green-400
        ">

          {problem.difficulty}

        </span>




        <h2 className="
        text-xl
        font-semibold
        mt-8
        ">

          Problem Description

        </h2>



        <p className="
        text-gray-400
        mt-3
        ">

          {problem.description}

        </p>




        <h2 className="
        text-xl
        font-semibold
        mt-8
        ">

          Example

        </h2>



        <div className="
        bg-slate-950
        p-4
        rounded-xl
        mt-3
        ">


        Input:
        <br/>

        {problem.input}


        <br/><br/>


        Output:
        <br/>

        {problem.output}


        </div>



      </div>









      {/* Editor */}


      <div className="
      bg-slate-900
      border
      border-slate-800
      rounded-2xl
      overflow-hidden
      ">



      <div className="
      flex
      justify-between
      items-center
      px-5
      py-3
      border-b
      border-slate-800
      ">


        <p>
          {fileName}
        </p>



        <select

        value={language}

        onChange={(e)=>setLanguage(e.target.value)}

        className="
        bg-slate-800
        px-3
        py-2
        rounded-lg
        "

        >


          <option value="cpp">
            C++
          </option>


          <option value="java">
            Java
          </option>


          <option value="python">
            Python
          </option>


        </select>


      </div>







      <Editor


      height="500px"


      language={
        language==="cpp"
        ?
        "cpp"
        :
        language==="java"
        ?
        "java"
        :
        "python"
      }



      value={code}



      onChange={(value)=>{

        setCode(value || "");

      }}



      theme="vs-dark"



      />







      <div className="
      p-4
      flex
      gap-4
      border-t
      border-slate-800
      ">


      <button

      onClick={runCode}

      className="
      bg-green-600
      px-6
      py-2
      rounded-lg
      "

      >

      Run

      </button>





      <button

      onClick={submitCode}

      className="
      bg-purple-600
      px-6
      py-2
      rounded-lg
      "

      >

      Submit

      </button>



      </div>







      <div className="
      p-5
      border-t
      border-slate-800
      ">


      <h2 className="font-semibold">

      Output

      </h2>

         <div className="p-5 border-t border-slate-800">

  <h2 className="font-semibold mb-3">
    Custom Input
  </h2>

  <textarea
    value={customInput}
    onChange={(e)=>setCustomInput(e.target.value)}
    placeholder="Enter custom input..."
    className="
    w-full
    h-32
    bg-slate-950
    border
    border-slate-800
    rounded-xl
    p-4
    outline-none
    resize-none
    "
  />

</div>

      <div className="
      bg-slate-950
      mt-3
      p-4
      rounded-xl
      text-green-400
      ">


      {
        output ||
        "Run your code to see output..."
      }


      </div>



      </div>





      {

      status &&

      <div className="
      p-5
      text-xl
      font-bold
      ">

      {status}

      </div>

      }



      </div>





      </div>


      </div>


    </div>


  )

}


export default CodeEditor;