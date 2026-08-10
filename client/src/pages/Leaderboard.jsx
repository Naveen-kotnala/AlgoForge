import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

function Leaderboard() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/users/leaderboard",
        );

        setUsers(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setCurrentUser(res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLeaderboard();
    fetchProfile();
  }, []);

  const userRank =
    currentUser && users.findIndex((u) => u._id === currentUser._id) + 1;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />

      {/* Background Glow */}
      <div
        className="
          absolute
          top-20
          left-10
          sm:left-20
          w-64
          sm:w-96
          h-64
          sm:h-96
          bg-yellow-500/20
          blur-3xl
          rounded-full
          pointer-events-none
        "
      ></div>

      <div
        className="
          relative
          pt-28
          sm:pt-32
          px-4
          sm:px-6
          lg:px-8
          pb-10
          max-w-6xl
          mx-auto
        "
      >
        {/* HEADER */}

        <h1
          className="
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-extrabold
            bg-linear-to-r
            from-yellow-400
            to-orange-500
            text-transparent
            bg-clip-text
            leading-tight
          "
        >
          🏆 AlgoForge Leaderboard
        </h1>

        <p
          className="
            text-gray-400
            mt-3
            text-base
            sm:text-lg
          "
        >
          Top developers competing globally 🚀
        </p>

        {/* TOP 3 PODIUM */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3
            gap-5
            sm:gap-6
            mt-8
            sm:mt-12
            items-center
          "
        >
          {/* SECOND PLACE */}

          {users[1] && (
            <div
              className="
                bg-linear-to-br
                from-slate-800
                to-slate-900
                border
                border-gray-500/30
                rounded-3xl
                p-6
                sm:p-8
                text-center
                hover:scale-[1.02]
                md:hover:scale-105
                transition
                order-2
                md:order-1
              "
            >
              <div className="text-4xl">🥈</div>

              <h2
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  mt-4
                  wrap-break-word
                "
              >
                {users[1].name}
              </h2>

              <p
                className="
                  text-purple-400
                  text-lg
                  sm:text-xl
                  mt-3
                "
              >
                {users[1].xp} XP
              </p>

              <p className="text-gray-400 mt-2">{users[1].solved} Problems</p>
            </div>
          )}

          {/* FIRST PLACE */}

          {users[0] && (
            <div
              className="
                bg-linear-to-br
                from-yellow-900/40
                to-slate-900
                border
                border-yellow-500/40
                rounded-3xl
                p-7
                sm:p-10
                text-center
                scale-100
                md:scale-105
                shadow-xl
                order-1
                md:order-2
              "
            >
              <div className="text-5xl">👑</div>

              <h2
                className="
                  text-2xl
                  sm:text-3xl
                  font-bold
                  mt-4
                  wrap-break-word
                "
              >
                {users[0].name}
              </h2>

              <p
                className="
                  text-yellow-400
                  text-xl
                  sm:text-2xl
                  font-bold
                  mt-3
                "
              >
                {users[0].xp} XP
              </p>

              <p className="text-gray-400 mt-2">{users[0].solved} Problems</p>

              <div
                className="
                  mt-4
                  inline-block
                  px-5
                  py-2
                  rounded-full
                  bg-yellow-500/20
                  text-yellow-400
                "
              >
                {users[0].level}
              </div>
            </div>
          )}

          {/* THIRD PLACE */}

          {users[2] && (
            <div
              className="
                bg-linear-to-br
                from-orange-900/30
                to-slate-900
                border
                border-orange-500/30
                rounded-3xl
                p-6
                sm:p-8
                text-center
                hover:scale-[1.02]
                md:hover:scale-105
                transition
                order-3
              "
            >
              <div className="text-4xl">🥉</div>

              <h2
                className="
                  text-xl
                  sm:text-2xl
                  font-bold
                  mt-4
                  wrap-break-word
                "
              >
                {users[2].name}
              </h2>

              <p
                className="
                  text-purple-400
                  text-lg
                  sm:text-xl
                  mt-3
                "
              >
                {users[2].xp} XP
              </p>

              <p className="text-gray-400 mt-2">{users[2].solved} Problems</p>
            </div>
          )}
        </div>

        {/* CURRENT USER */}

        {currentUser && (
          <div
            className="
              mt-8
              sm:mt-12
              mb-8
              bg-linear-to-r
              from-purple-600/20
              to-blue-600/20
              border
              border-purple-500/30
              rounded-3xl
              p-5
              sm:p-8
              flex
              flex-col
              sm:flex-row
              justify-between
              sm:items-center
              gap-6
            "
          >
            <div>
              <p className="text-gray-400">Your Rank</p>

              <h2
                className="
                  text-4xl
                  sm:text-5xl
                  font-bold
                  mt-2
                "
              >
                #{userRank || "--"}
              </h2>

              <p className="mt-3 text-gray-300 wrap-break-word">
                {currentUser.name}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-gray-400">Keep climbing 🚀</p>

              <div
                className="
                  mt-3
                  inline-block
                  px-4
                  py-2
                  rounded-full
                  bg-purple-500/20
                  text-purple-300
                "
              >
                Future Legend
              </div>
            </div>
          </div>
        )}

        {/* FULL RANKING TABLE */}

        <div
          className="
            mt-8
            sm:mt-12
            bg-slate-900/80
            border
            border-slate-700
            rounded-3xl
            p-4
            sm:p-6
            lg:p-8
          "
        >
          <h2
            className="
              text-xl
              sm:text-2xl
              font-bold
            "
          >
            🔥 Global Rankings
          </h2>

          {/* SEARCH */}

          <input
            type="text"
            placeholder="Search developer..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full
              mt-4
              mb-6
              bg-slate-800
              border
              border-slate-700
              rounded-xl
              px-4
              sm:px-5
              py-3
              outline-none
              focus:border-purple-500
              text-sm
              sm:text-base
            "
          />

          {/* USERS */}

          <div className="space-y-4">
            {filteredUsers.map((user, index) => (
              <div
                key={user._id}
                className="
                  grid
                  grid-cols-2
                  sm:grid-cols-5
                  gap-4
                  sm:gap-3
                  items-center
                  bg-slate-800/60
                  border
                  border-slate-700
                  rounded-2xl
                  p-4
                  sm:p-5
                  hover:border-purple-500/50
                  transition
                "
              >
                {/* Rank */}

                <div
                  className="
                    text-lg
                    sm:text-xl
                    font-bold
                  "
                >
                  #{index + 1}
                </div>

                {/* User */}

                <div className="min-w-0">
                  <h3
                    className="
                      font-bold
                      text-base
                      sm:text-lg
                      truncate
                    "
                  >
                    {user.name}
                  </h3>

                  <p className="text-gray-400 text-sm">Developer</p>
                </div>

                {/* Level */}

                <div>
                  <span
                    className="
                      inline-block
                      px-3
                      py-1
                      rounded-full
                      bg-purple-500/20
                      text-purple-300
                      text-sm
                    "
                  >
                    {user.level}
                  </span>
                </div>

                {/* Solved */}

                <div
                  className="
                    text-green-400
                    font-bold
                  "
                >
                  <span className="text-base sm:text-lg">{user.solved}</span>

                  <p className="text-gray-500 text-sm font-normal">Solved</p>
                </div>

                {/* XP */}

                <div
                  className="
                    text-yellow-400
                    font-bold
                    text-base
                    sm:text-lg
                  "
                >
                  ⚡ {user.xp}
                </div>
              </div>
            ))}

            {filteredUsers.length === 0 && (
              <div className="text-center py-10 text-gray-400">
                No developers found.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Leaderboard;
