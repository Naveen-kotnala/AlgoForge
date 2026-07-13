function Features() {

  const features = [
    {
      icon: "⚡",
      title: "Instant Code Execution",
      desc: "Run and test your solutions instantly with automated evaluation."
    },
    {
      icon: "🧠",
      title: "DSA Practice",
      desc: "Master algorithms with carefully designed coding challenges."
    },
    {
      icon: "🏆",
      title: "Competitive Coding",
      desc: "Participate in contests and compete with developers."
    },
    {
      icon: "🤖",
      title: "AI Code Assistant",
      desc: "Get intelligent hints and explanations for your code."
    }
  ];


  return (

    <section className="px-8 py-24 bg-slate-950">

      <div className="max-w-7xl mx-auto">


        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-white">
            Powerful Features
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Everything you need to become a better programmer.
          </p>

        </div>



        <div className="grid md:grid-cols-4 gap-6">


          {
            features.map((item,index)=>(

              <div
              key={index}
              className="
              bg-slate-900
              border border-slate-800
              p-6
              rounded-2xl
              hover:-translate-y-2
              transition
              duration-300
              "
              >


                <div className="text-4xl mb-5">
                  {item.icon}
                </div>


                <h3 className="text-xl font-semibold text-white">
                  {item.title}
                </h3>


                <p className="text-gray-400 mt-3">
                  {item.desc}
                </p>


              </div>

            ))
          }


        </div>


      </div>


    </section>

  )
}


export default Features