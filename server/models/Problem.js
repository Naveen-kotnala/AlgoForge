import mongoose from "mongoose";


const problemSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },


    description:{
        type:String,
        required:true
    },


    difficulty:{
        type:String,
        enum:["Easy","Medium","Hard"],
        required:true
    },


    tags:[
        {
            type:String
        }
    ],


    starterCode:{
        cpp:{
            type:String
        },

        java:{
            type:String
        },

        python:{
            type:String
        }
    },


    testCases:[
        {
            input:String,
            output:String
        }
    ],


    examples:[
        {
            input:String,
            output:String
        }
    ],


    constraints:{
        type:String
    }


},
{
    timestamps:true
});


const Problem = mongoose.model(
    "Problem",
    problemSchema
);


export default Problem;