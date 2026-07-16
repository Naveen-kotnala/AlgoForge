import { executeCode } from "../services/executionService.js";
import { runCode } from "../services/judgeService.js";
import axios from "axios";
import authMiddleware from "../middleware/authMiddleware.js";
import Submission from "../models/Submission.js";
import express from "express";

const router = express.Router();


router.post("/run", async (req, res) => {

    try {

        const { language, code } = req.body;

        const result = await executeCode(language, code);

        res.json(result);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


// Submit Route
router.post("/submit",authMiddleware, async (req, res) => {

    try {

        const { code, language, problemId } = req.body;



console.log("Creating submission:");
console.log("USER ID:", req.user.id);
console.log("PROBLEM ID:", problemId);



        const submission = await Submission.create({
            userId:req.user.id,

            problemId,
            code,
            language,
            status:"Accepted ✅"

        });

        console.log("SAVED:", submission);


        res.json({

            status:"Accepted ✅",
            message:"Solution submitted successfully",
            submission

        });


    } catch(error) {

         console.log("========== SUBMISSION ERROR ==========");
    console.log(error);
    console.log(error.message);

        res.status(500).json({

            message:error.message

        });

    }

});

router.get(
"/my-submissions",
authMiddleware,
async(req,res)=>{

  try{

    const submissions = await Submission.find({
      userId:req.user.id
    }).sort({
      createdAt:-1
    });

       console.log(
      "MY SUBMISSIONS:",
      JSON.stringify(submissions,null,2)
    );


    res.json(submissions);


  }
  catch(error){

    res.status(500).json({
      message:error.message
    });

  }

});

// Get all submissions

router.get("/submissions", async(req,res)=>{

    try{

        const submissions = await Submission.find()
        .populate("problemId")
        .sort({createdAt:-1});


        res.json(submissions);


    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});


export default router;