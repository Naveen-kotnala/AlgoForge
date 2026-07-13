function ProblemsPreview() {

  const problems = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      tag: "Array"
    },
    {
      title: "Longest Substring Without Repeating Characters",
      difficulty: "Medium",
      tag: "String"
    },
    {
      title: "Merge K Sorted Lists",
      difficulty: "Hard",
      tag: "Linked List"
    }
  ];


  return (

    <section className="py-24 px-8 bg-slate-950">

      <div className="max-w-7xl mx-auto">


        <div className="flex justify-between items-center mb-12">

          <div>

            <h2 className="text-4xl font-bold text-white">
              Featured Problems
            </h2>

            <p className="text-gray-400 mt-3">
              Practice real interview level coding questions.
            </p>

          </div>


          <button className="text-purple-400 hover:text-purple-300">
            View All →
          </button>

        </div>



        <div className="grid md:grid-cols-3 gap-6">


          {
            problems.map((problem,index)=>(


              <div
              key={index}
              className="
              bg-slate-900
              border border-slate-800
              rounded-2xl
              p-6
              hover:-translate-y-2
              transition
              "
              >


                <h3 className="text-xl font-semibold text-white">
                  {problem.title}
                </h3>


                <div className="flex gap-3 mt-5">


                  <span className="
                  px-3 py-1 
                  rounded-full 
                  text-sm
                  bg-purple-500/20
                  text-purple-400
                  ">
                    {problem.tag}
                  </span>



                  <span className={`
                  px-3 py-1 
                  rounded-full 
                  text-sm

                  ${
                    problem.difficulty==="Easy"
                    ?
                    "bg-green-500/20 text-green-400"
                    :
                    problem.difficulty==="Medium"
                    ?
                    "bg-yellow-500/20 text-yellow-400"
                    :
                    "bg-red-500/20 text-red-400"
                  }

                  `}>
                    {problem.difficulty}
                  </span>


                </div>



                <button className="
                mt-6
                w-full
                py-3
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                to-blue-500
                text-white
                font-semibold
                hover:scale-105
                transition
                ">

                  Solve Problem

                </button>


              </div>


            ))
          }


        </div>


      </div>


    </section>

  )
}


export default ProblemsPreview