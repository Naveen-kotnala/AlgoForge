function Stats() {

  const stats = [
    {
      number: "10K+",
      title: "Coding Problems"
    },
    {
      number: "50K+",
      title: "Developers"
    },
    {
      number: "99%",
      title: "Execution Accuracy"
    },
    {
      number: "24/7",
      title: "Coding Practice"
    }
  ];


  return (

    <section className="py-20 px-8 bg-slate-950">

      <div className="max-w-7xl mx-auto">


        <div className="grid md:grid-cols-4 gap-6">


          {
            stats.map((item,index)=>(

              <div
              key={index}
              className="
              bg-slate-900
              border border-slate-800
              rounded-2xl
              p-8
              text-center
              hover:border-purple-500
              transition
              "
              >

                <h2 className="text-5xl font-bold text-white">
                  {item.number}
                </h2>


                <p className="text-gray-400 mt-3">
                  {item.title}
                </p>


              </div>

            ))
          }


        </div>


      </div>

    </section>

  )
}

export default Stats