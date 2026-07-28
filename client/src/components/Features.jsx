import { Zap, Brain, Trophy, Bot } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <Zap />,
      title: "Instant Code Execution",
      desc: "Run your code instantly with powerful online compiler and automated test cases.",
      color: "purple",
    },

    {
      icon: <Brain />,
      title: "DSA Practice",
      desc: "Master Data Structures and Algorithms with interview focused problems.",
      color: "cyan",
    },

    {
      icon: <Trophy />,
      title: "Competitive Coding",
      desc: "Improve your ranking by solving challenges and competing with developers.",
      color: "yellow",
    },

    {
      icon: <Bot />,
      title: "AI Code Assistant",
      desc: "Understand your mistakes with smart hints and detailed explanations.",
      color: "green",
    },
  ];

  return (
    <section
      className="
    px-6 lg:px-8
    py-28
    bg-slate-950
    relative
    overflow-hidden
    "
    >
      {/* Glow */}

      <div
        className="
      absolute
      top-20
      left-1/2
      -translate-x-1/2
      w-125
      h-75
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

        <div className="text-center mb-16">
          <div
            className="
          inline-block
          px-4 py-2
          rounded-full
          bg-purple-500/10
          border border-purple-500/20
          text-purple-300
          text-sm
          mb-5
          "
          >
            🚀 Why Choose AlgoForge
          </div>

          <h2
            className="
          text-4xl
          md:text-5xl
          font-extrabold
          text-white
          "
          >
            Everything You Need To
            <span
              className="
            block
            text-purple-500
            "
            >
              Crack Coding Interviews
            </span>
          </h2>

          <p
            className="
          text-gray-400
          mt-5
          text-lg
          max-w-2xl
          mx-auto
          "
          >
            Practice, analyze and improve your coding skills with a complete
            developer learning platform.
          </p>
        </div>

        {/* Cards */}

        <div
          className="
        grid
        md:grid-cols-2
        lg:grid-cols-4
        gap-6
        "
        >
          {features.map((item, index) => (
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
                w-14
                h-14
                rounded-2xl
                bg-linear-to-br
                from-purple-600
                to-cyan-400
                flex
                items-center
                justify-center
                text-white
                mb-6
                shadow-lg
                shadow-purple-500/20
                group-hover:scale-110
                transition
                "
              >
                {item.icon}
              </div>

              <h3
                className="
                text-xl
                font-bold
                text-white
                "
              >
                {item.title}
              </h3>

              <p
                className="
                text-gray-400
                mt-4
                leading-7
                "
              >
                {item.desc}
              </p>

              {/* Bottom line */}

              <div
                className="
                mt-6
                text-purple-400
                text-sm
                font-semibold
                opacity-0
                group-hover:opacity-100
                transition
                "
              >
                Explore →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
