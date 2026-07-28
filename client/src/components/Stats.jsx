import { Code2, Users, ShieldCheck, Clock } from "lucide-react";

function Stats() {
  const stats = [
    {
      icon: <Code2 />,
      number: "20K+",
      title: "Coding Problems",
      desc: "Curated DSA & interview questions",
    },

    {
      icon: <Users />,
      number: "50K+",
      title: "Developers",
      desc: "Growing coding community",
    },

    {
      icon: <ShieldCheck />,
      number: "99%",
      title: "Execution Accuracy",
      desc: "Reliable code evaluation",
    },

    {
      icon: <Clock />,
      number: "24/7",
      title: "Coding Practice",
      desc: "Learn anytime anywhere",
    },
  ];

  return (
    <section
      className="
    relative
    py-24
    px-6 lg:px-8
    bg-slate-950
    overflow-hidden
    "
    >
      {/* Background Glow */}

      <div
        className="
      absolute
      left-1/2
      -translate-x-1/2
      w-[500px]
      h-[250px]
      bg-purple-600/10
      blur-3xl
      rounded-full
      "
      ></div>

      <div
        className="
      max-w-7xl
      mx-auto
      relative
      "
      >
        {/* Heading */}

        <div
          className="
        text-center
        mb-14
        "
        >
          <div
            className="
          inline-flex
          px-4 py-2
          rounded-full
          bg-purple-500/10
          border border-purple-500/20
          text-purple-300
          text-sm
          mb-5
          "
          >
            🚀 Trusted by Developers
          </div>

          <h2
            className="
          text-4xl
          md:text-5xl
          font-extrabold
          text-white
          "
          >
            Build Skills.
            <span
              className="
            block
            text-purple-500
            "
            >
              Solve Problems.
            </span>
          </h2>

          <p
            className="
          text-gray-400
          mt-4
          text-lg
          "
          >
            Everything you need to become interview ready.
          </p>
        </div>

        {/* Stats Cards */}

        <div
          className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        "
        >
          {stats.map((item, index) => (
            <div
              key={index}
              className="
              group
              relative
              bg-slate-900/70
              backdrop-blur-xl
              border border-slate-800
              rounded-3xl
              p-7
              hover:border-purple-500/50
              hover:-translate-y-2
              transition
              duration-300
              "
            >
              {/* Icon */}

              <div
                className="
                w-12
                h-12
                rounded-xl
                bg-gradient-to-br
                from-purple-600
                to-cyan-400
                flex
                items-center
                justify-center
                text-white
                mb-6
                group-hover:scale-110
                transition
                "
              >
                {item.icon}
              </div>

              {/* Number */}

              <h2
                className="
                text-5xl
                font-extrabold
                bg-gradient-to-r
                from-purple-400
                to-cyan-400
                bg-clip-text
                text-transparent
                "
              >
                {item.number}
              </h2>

              <h3
                className="
                text-white
                text-lg
                font-semibold
                mt-3
                "
              >
                {item.title}
              </h3>

              <p
                className="
                text-gray-400
                text-sm
                mt-3
                "
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;

// function Stats() {
//   const stats = [
//     {
//       value: "500+",
//       label: "Coding Problems",
//     },
//     {
//       value: "50+",
//       label: "Topics Covered",
//     },
//     {
//       value: "10K+",
//       label: "Lines of Code Written",
//     },
//     {
//       value: "100%",
//       label: "Free Practice",
//     },
//   ];

//   return (
//     <section className="py-24">
//       <div className="max-w-7xl mx-auto px-8">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {stats.map((item) => (
//             <div
//               key={item.label}
//               className="
//               bg-slate-900
//               border
//               border-slate-800
//               rounded-2xl
//               p-8
//               hover:border-purple-500
//               hover:-translate-y-2
//               transition
//               duration-300
//               "
//             >
//               <h2 className="text-5xl font-bold text-purple-400">
//                 {item.value}
//               </h2>

//               <p className="mt-4 text-gray-400">{item.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Stats;
