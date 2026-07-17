import Problem from "../models/Problem.js";
import { generateCppWrapper } from "../services/wrapperService.js";
import { executeCode } from "../services/executionService.js";
import authMiddleware from "../middleware/authMiddleware.js";
import Submission from "../models/Submission.js";
import express from "express";

const router = express.Router();


// RUN CODE
router.post("/run", async (req, res) => {

    try {

        const { code, language, input } = req.body;

        const result = await executeCode(
            language,
            code,
            input
        );

        res.json(result);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

});




// SUBMIT CODE
router.post("/submit", authMiddleware, async (req,res)=>{


    try{


        const { code, language, problemId } = req.body;



        // Find Problem

        const problem = await Problem.findById(problemId);


        if(!problem){

            return res.status(404).json({

                message:"Problem not found"

            });

        }



         let finalStatus = "Accepted ✅";

for (const testCase of problem.hiddenTestCases) {

    // Generate Wrapper
    const wrapperCode = generateCppWrapper(
        code,
        problem.functionName,
        testCase
    );

    console.log("========== WRAPPER ==========");
    console.log(wrapperCode);

    // Execute
    const result = await executeCode(
        language,
        wrapperCode
    );

    console.log("EXECUTION RESULT:", result);

    // Compilation / Runtime Error
    if (!result.success) {

        finalStatus = "Compilation Error ❌";
        break;

    }

    // Wrong Answer
    if (
        result.output.trim() !==
        JSON.stringify(testCase.output).trim()
    ) {

        finalStatus = "Wrong Answer ❌";
        break;

    }

}





        console.log("Creating submission:");

        console.log("USER ID:", req.user.id);

        console.log("PROBLEM ID:", problemId);




        // Save Submission

        const submission = await Submission.create({

            userId:req.user.id,

            problemId,

            code,

            language,

            status:finalStatus

        });



        console.log("SAVED:", submission);



        res.json({

            status:finalStatus,

            message:"Solution submitted successfully",

            submission

        });



    }

    catch(error){


        console.log("========== SUBMISSION ERROR ==========");

        console.log(error);


        res.status(500).json({

            message:error.message

        });


    }


});




// USER SUBMISSIONS

router.get(
"/my-submissions",
authMiddleware,
async(req,res)=>{

    try{


        const submissions = await Submission.find({

            userId:req.user.id

        })
        .sort({

            createdAt:-1

        });



        res.json(submissions);



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }

});





// ALL SUBMISSIONS

router.get("/submissions", async(req,res)=>{


    try{


        const submissions = await Submission.find()

        .populate("problemId")

        .sort({

            createdAt:-1

        });



        res.json(submissions);



    }
    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});



export default router;