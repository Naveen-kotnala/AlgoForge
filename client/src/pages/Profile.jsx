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

      console.log(res.data);
      setProfile(res.data);
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <div className="pt-28 px-8 max-w-6xl mx-auto">
        {/* Profile Header */}

        <div
          className="
        bg-slate-900
        border border-slate-800
        rounded-3xl
        p-8
        flex
        justify-between
        items-center
        "
        >
          <div>
            <h1 className="text-4xl font-bold">{profile.user.name}</h1>

            <p className="text-gray-400 mt-2">{profile.user.email}</p>

            <p className="text-purple-400 mt-4">🚀 AlgoForge Developer</p>
          </div>

          <div
            className="
          w-44
          h-44
          rounded-full
          border-8
          border-purple-500
          flex
          flex-col
          justify-center
          items-center
          "
          >
            <h2 className="text-5xl font-bold">{profile.solved}</h2>

            <p className="text-gray-400">Solved</p>
          </div>
        </div>

        {/* Difficulty Stats */}

        <div
          className="
        grid
        md:grid-cols-3
        gap-6
        mt-8
        "
        >
          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-gray-400">Easy</h3>

            <p className="text-3xl font-bold text-green-400">{profile.easy}</p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-gray-400">Medium</h3>

            <p className="text-3xl font-bold text-yellow-400">
              {profile.medium}
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
            <h3 className="text-gray-400">Hard</h3>

            <p className="text-3xl font-bold text-red-400">{profile.hard}</p>
          </div>
        </div>

        {/* Streak Cards */}

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
          bg-slate-900
          border border-slate-800
          rounded-2xl
          p-6
          "
          >
            <h3 className="text-gray-400">🔥 Current Streak</h3>

            <p className="text-4xl font-bold text-orange-400 mt-3">
              {profile.streak} Days
            </p>
          </div>

          <div
            className="
          bg-slate-900
          border border-slate-800
          rounded-2xl
          p-6
          "
          >
            <h3 className="text-gray-400">🏆 Longest Streak</h3>

            <p className="text-4xl font-bold text-purple-400 mt-3">
              {profile.longestStreak} Days
            </p>
          </div>

          <div
            className="
            mt-8
          bg-slate-900
            border border-slate-800
            rounded-2xl
            p-8
           "
          >
            <h2 className="text-2xl font-bold">⚡ Experience</h2>

            <div className="mt-5 flex justify-between items-center">
              <div>
                <p className="text-gray-400">Current XP</p>

                <h3 className="text-4xl font-bold text-yellow-400">
                  {profile.xp} XP
                </h3>
              </div>

              <div
                className="
              bg-purple-600
                px-6
                py-3
                rounded-xl
                text-xl
                font-bold
               "
              >
                {profile.level}
              </div>
            </div>

            {/* Progress Bar */}

            <div className="mt-6">
              <div className="flex justify-between text-gray-400 mb-2">
                <span>Level Progress</span>

                <span>{profile.xp}/100</span>
              </div>

              <div
                className="
                w-full
                h-4
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
                  "
                  style={{
                    width: `${Math.min(profile.xp, 100)}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Badges */}

        <div
          className="
        mt-8
        bg-slate-900
        border border-slate-800
        rounded-2xl
        p-8
        "
        >
          <h2 className="text-2xl font-bold">🏆 Badges</h2>

          <div className="flex flex-wrap gap-4 mt-6">
            {profile.badges?.map((badge, index) => (
              <div
                key={index}
                className="
              bg-slate-800
              px-5
              py-3
              rounded-xl
              flex
              items-center
              gap-3
              "
              >
                <span className="text-2xl">{badge.icon}</span>

                <span>{badge.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Calendar */}

        <div
          className="
        mt-8
        bg-slate-900
        border border-slate-800
        rounded-2xl
        p-8
        "
        >
          <h2 className="text-2xl font-bold">🔥 Coding Activity</h2>

          <p className="text-purple-400 text-xl mt-3">
            Current Streak: {profile.streak} Days
          </p>

          <div className="grid grid-cols-7 gap-3 mt-6">
            {Array.from({ length: 28 }).map((_, i) => {
              const date = new Date();

              date.setDate(date.getDate() - (27 - i));

              const dateString = date.toISOString().split("T")[0];

              const solvedToday = profile.activity?.includes(dateString);

              return (
                <div
                  key={i}
                  title={dateString}
                  className={`
                w-8
                h-8
                rounded
                ${solvedToday ? "bg-green-500" : "bg-slate-700"}
                `}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
