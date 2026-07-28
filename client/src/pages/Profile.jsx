import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(res.data);
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div
        className="
      min-h-screen
      bg-slate-950
      text-white
      flex
      justify-center
      items-center
      text-xl
      "
      >
        Loading Profile...
      </div>
    );
  }

  return (
    <div
      className="
      min-h-screen
      bg-[#020617]
      text-white
      relative
      overflow-hidden
      "
    >
      {/* Background Glow */}
      <div
        className="
      absolute
      top-20
      left-20
      w-96
      h-96
      bg-purple-600/20
      blur-3xl
      rounded-full
      "
      ></div>
      <div
        className="
      absolute
      right-20
      top-40
      w-96
      h-96
      bg-blue-600/20
      blur-3xl
      rounded-full
      "
      ></div>

      <Navbar />

      <div
        className="
      relative
      pt-28
      px-6
      max-w-6xl
      mx-auto
      "
      >
        {/* PROFILE HEADER */}
        <div
          className="
          bg-linear-to-br
          from-purple-900/40
          via-slate-900
          to-blue-900/40
          border
          border-slate-700
          rounded-3xl
          p-10
          shadow-2xl
          "
        >
          <div
            className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-8
            "
          >
            {/* Avatar */}
            <div
              className="
              w-40
              h-40
              rounded-full
              bg-linear-to-r
              from-purple-500
              to-blue-500
              p-1
              shadow-xl
              "
            >
              <div
                className="
                w-full
                h-full
                rounded-full
                bg-slate-950
                flex
                items-center
                justify-center
                text-6xl
                font-bold
                "
              >
                {profile.user.name.charAt(0)}
              </div>
            </div>

            {/* User Info */}
            <div
              className="
              flex-1
              text-center
              md:text-left
              "
            >
              <h1
                className="
                text-5xl
                font-extrabold
                bg-linear-to-r
                from-purple-400
                to-blue-400
                text-transparent
                bg-clip-text
                "
              >
                {profile.user.name}
              </h1>

              <p
                className="
                text-gray-400
                mt-3
                text-lg
                "
              >
                {profile.user.email}
              </p>

              <div
                className="
                inline-flex
                mt-5
                px-5
                py-2
                rounded-full
                bg-purple-500/20
                border
                border-purple-500/40
                text-purple-300
                "
              >
                🚀 AlgoForge Developer
              </div>
            </div>

            {/* Solved Circle */}
            <div
              className="
              w-44
              h-44
              rounded-full
              bg-linear-to-r
              from-purple-500
              to-blue-500
              p-1
              shadow-xl
              "
            >
              <div
                className="
                w-full
                h-full
                rounded-full
                bg-slate-950
                flex
                flex-col
                justify-center
                items-center
                "
              >
                <h2
                  className="
                  text-6xl
                  font-bold
                  "
                >
                  {profile.solved}
                </h2>
                <p
                  className="
                  text-gray-400
                  "
                >
                  Solved
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Difficulty Cards */}
        <div
          className="
          grid
          md:grid-cols-3
          gap-6
          mt-8
          "
        >
          <div
            className="
            bg-linear-to-br
            from-green-900/40
            to-slate-900
            border
            border-green-500/30
            p-6
            rounded-3xl
            hover:scale-105
            transition
            "
          >
            <h3 className="text-gray-400">🟢 Easy</h3>
            <p
              className="
              text-4xl
              font-bold
              text-green-400
              mt-3
              "
            >
              {profile.easy}
            </p>
          </div>

          <div
            className="
            bg-linear-to-br
            from-yellow-900/40
            to-slate-900
            border
            border-yellow-500/30
            p-6
            rounded-3xl
            hover:scale-105
            transition
            "
          >
            <h3 className="text-gray-400">🟡 Medium</h3>
            <p
              className="
              text-4xl
              font-bold
              text-yellow-400
              mt-3
              "
            >
              {profile.medium}
            </p>
          </div>

          <div
            className="
            bg-linear-to-br
            from-red-900/40
            to-slate-900
            border
            border-red-500/30
            p-6
            rounded-3xl
            hover:scale-105
            transition
            "
          >
            <h3 className="text-gray-400">🔴 Hard</h3>
            <p
              className="
              text-4xl
              font-bold
              text-red-400
              mt-3
              "
            >
              {profile.hard}
            </p>
          </div>
        </div>

        {/* STREAK SECTION */}
        <div
          className="
          grid
          md:grid-cols-2
          gap-6
          mt-8
          "
        >
          <div
            className="
            bg-slate-900/80
            border
            border-slate-700
            rounded-3xl
            p-8
            hover:border-orange-500/40
            transition
            "
          >
            <h3
              className="
              text-gray-400
              text-lg
              "
            >
              🔥 Current Streak
            </h3>

            <p
              className="
              text-5xl
              font-bold
              text-orange-400
              mt-4
              "
            >
              {profile.streak} Days
            </p>

            <p className="text-gray-500 mt-2">Keep solving daily 🚀</p>
          </div>

          <div
            className="
            bg-slate-900/80
            border
            border-slate-700
            rounded-3xl
            p-8
            hover:border-purple-500/40
            transition
            "
          >
            <h3
              className="
              text-gray-400
              text-lg
              "
            >
              🏆 Longest Streak
            </h3>

            <p
              className="
              text-5xl
              font-bold
              text-purple-400
              mt-4
              "
            >
              {profile.longestStreak} Days
            </p>

            <p className="text-gray-500 mt-2">Your best consistency record</p>
          </div>
        </div>

        {/* XP SECTION */}
        <div
          className="
          mt-8
          bg-linear-to-br
          from-slate-900
          to-purple-900/30
          border
          border-slate-700
          rounded-3xl
          p-8
          "
        >
          <div
            className="
            flex
            justify-between
            items-center
            "
          >
            <div>
              <h2
                className="
                text-3xl
                font-bold
                "
              >
                ⚡ Experience
              </h2>

              <p
                className="
              text-gray-400
              mt-2
              "
              >
                Level up your coding journey
              </p>
            </div>

            <div
              className="
              bg-linear-to-r
              from-purple-500
              to-blue-500
              px-8
              py-4
              rounded-2xl
              font-bold
              text-xl
              shadow-lg
              "
            >
              ⭐ {profile.level}
            </div>
          </div>

          <div
            className="
            mt-8
            flex
            justify-between
            items-center
            "
          >
            <div>
              <p className="text-gray-400">Current XP</p>

              <h2
                className="
                text-5xl
                font-bold
                text-yellow-400
                mt-2
                "
              >
                {profile.xp}
                <span className="text-2xl"> XP</span>
              </h2>
            </div>
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div
              className="
              flex
              justify-between
              text-gray-400
              mb-3
              "
            >
              <span>Level Progress</span>

              <span>{profile.xp}/100</span>
            </div>

            <div
              className="
              w-full
              h-5
              bg-slate-700
              rounded-full
              overflow-hidden
              "
            >
              <div
                className="
                h-full
                bg-linear-to-r
                from-purple-500
                to-blue-500
                rounded-full
                transition-all
                duration-700
                "
                style={{
                  width: `${Math.min(profile.xp, 100)}%`,
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* BADGES */}
        <div
          className="
          mt-8
          bg-slate-900/80
          border
          border-slate-700
          rounded-3xl
          p-8
          "
        >
          <h2
            className="
            text-3xl
            font-bold
            "
          >
            🏆 Achievements
          </h2>

          <div
            className="
            flex
            flex-wrap
            gap-5
            mt-6
            "
          >
            {profile.badges?.map((badge, index) => (
              <div
                key={index}
                className="
                  bg-slate-800
                  border
                  border-slate-700
                  px-6
                  py-4
                  rounded-2xl
                  flex
                  items-center
                  gap-3
                  hover:scale-105
                  transition
                  "
              >
                <span className="text-3xl">{badge.icon}</span>

                <span
                  className="
                    font-semibold
                    "
                >
                  {badge.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CODING ACTIVITY */}
        <div
          className="
          mt-8
          bg-slate-900/80
          border
          border-slate-700
          rounded-3xl
          p-8
          "
        >
          <div
            className="
            flex
            justify-between
            items-center
            "
          >
            <h2
              className="
              text-3xl
              font-bold
              "
            >
              🔥 Coding Activity
            </h2>

            <p
              className="
              text-purple-400
              font-semibold
              "
            >
              {profile.streak} Day Streak
            </p>
          </div>

          <div
            className="
            grid
            grid-cols-7
            gap-3
            mt-8
            "
          >
            {Array.from({ length: 35 }).map((_, i) => {
              const date = new Date();
              date.setDate(date.getDate() - (34 - i));

              const dateString = date.toISOString().split("T")[0];

              const solvedToday = profile.activity?.includes(dateString);

              return (
                <div
                  key={i}
                  title={dateString}
                  className={`
                    w-9
                    h-9
                    rounded-lg
                    cursor-pointer
                    transition
                    hover:scale-125
                    ${
                      solvedToday
                        ? "bg-green-500 shadow-lg shadow-green-500/40"
                        : "bg-slate-700"
                    }
                    `}
                ></div>
              );
            })}
          </div>

          <p
            className="
            text-gray-500
            mt-6
            "
          >
            Every green box represents a coding day 🚀
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
