// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// function Profile() {
//   const [profile, setProfile] = useState(null);

//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   useEffect(() => {
//     const fetchProfile = async () => {
//       const token = localStorage.getItem("token");
//       const res = await axios.get("http://localhost:5000/api/users/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setProfile(res.data);
//     };
//     fetchProfile();
//   }, []);

//   if (!profile) {
//     return (
//       <div
//         className="
//       min-h-screen
//       bg-slate-950
//       text-white
//       flex
//       justify-center
//       items-center
//       text-xl
//       "
//       >
//         Loading Profile...
//       </div>
//     );
//   }

//   return (
//     <div
//       className="
//       min-h-screen
//       bg-[#020617]
//       text-white
//       relative
//       overflow-hidden
//       "
//     >
//       {/* Background Glow */}
//       <div
//         className="
//       absolute
//       top-20
//       left-20
//       w-96
//       h-96
//       bg-purple-600/20
//       blur-3xl
//       rounded-full
//       "
//       ></div>
//       <div
//         className="
//       absolute
//       right-20
//       top-40
//       w-96
//       h-96
//       bg-blue-600/20
//       blur-3xl
//       rounded-full
//       "
//       ></div>

//       <Navbar />

//       <div
//         className="
//       relative
//       pt-28
//       px-6
//       max-w-6xl
//       mx-auto
//       "
//       >
//         {/* PROFILE HEADER */}
//         <div
//           className="
//           bg-linear-to-br
//           from-purple-900/40
//           via-slate-900
//           to-blue-900/40
//           border
//           border-slate-700
//           rounded-3xl
//           p-10
//           shadow-2xl
//           "
//         >
//           <div
//             className="
//             flex
//             flex-col
//             md:flex-row
//             items-center
//             justify-between
//             gap-8
//             "
//           >
//             {/* Avatar */}
//             <div
//               className="
//               w-40
//               h-40
//               rounded-full
//               bg-linear-to-r
//               from-purple-500
//               to-blue-500
//               p-1
//               shadow-xl
//               "
//             >
//               <div
//                 className="
//                 w-full
//                 h-full
//                 rounded-full
//                 bg-slate-950
//                 flex
//                 items-center
//                 justify-center
//                 text-6xl
//                 font-bold
//                 "
//               >
//                 {profile.user.name.charAt(0)}
//               </div>
//             </div>

//             {/* User Info */}
//             <div
//               className="
//               flex-1
//               text-center
//               md:text-left
//               "
//             >
//               <h1
//                 className="
//                 text-5xl
//                 font-extrabold
//                 bg-linear-to-r
//                 from-purple-400
//                 to-blue-400
//                 text-transparent
//                 bg-clip-text
//                 "
//               >
//                 {profile.user.name}
//               </h1>

//               <p
//                 className="
//                 text-gray-400
//                 mt-3
//                 text-lg
//                 "
//               >
//                 {profile.user.email}
//               </p>

//               <div
//                 className="
//                 inline-flex
//                 mt-5
//                 px-5
//                 py-2
//                 rounded-full
//                 bg-purple-500/20
//                 border
//                 border-purple-500/40
//                 text-purple-300
//                 "
//               >
//                 🚀 AlgoForge Developer
//               </div>
//             </div>

//             {/* Solved Circle */}
//             <div
//               className="
//               w-44
//               h-44
//               rounded-full
//               bg-linear-to-r
//               from-purple-500
//               to-blue-500
//               p-1
//               shadow-xl
//               "
//             >
//               <div
//                 className="
//                 w-full
//                 h-full
//                 rounded-full
//                 bg-slate-950
//                 flex
//                 flex-col
//                 justify-center
//                 items-center
//                 "
//               >
//                 <h2
//                   className="
//                   text-6xl
//                   font-bold
//                   "
//                 >
//                   {profile.solved}
//                 </h2>
//                 <p
//                   className="
//                   text-gray-400
//                   "
//                 >
//                   Solved
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Difficulty Cards */}
//         <div
//           className="
//           grid
//           md:grid-cols-3
//           gap-6
//           mt-8
//           "
//         >
//           <div
//             className="
//             bg-linear-to-br
//             from-green-900/40
//             to-slate-900
//             border
//             border-green-500/30
//             p-6
//             rounded-3xl
//             hover:scale-105
//             transition
//             "
//           >
//             <h3 className="text-gray-400">🟢 Easy</h3>
//             <p
//               className="
//               text-4xl
//               font-bold
//               text-green-400
//               mt-3
//               "
//             >
//               {profile.easy}
//             </p>
//           </div>

//           <div
//             className="
//             bg-linear-to-br
//             from-yellow-900/40
//             to-slate-900
//             border
//             border-yellow-500/30
//             p-6
//             rounded-3xl
//             hover:scale-105
//             transition
//             "
//           >
//             <h3 className="text-gray-400">🟡 Medium</h3>
//             <p
//               className="
//               text-4xl
//               font-bold
//               text-yellow-400
//               mt-3
//               "
//             >
//               {profile.medium}
//             </p>
//           </div>

//           <div
//             className="
//             bg-linear-to-br
//             from-red-900/40
//             to-slate-900
//             border
//             border-red-500/30
//             p-6
//             rounded-3xl
//             hover:scale-105
//             transition
//             "
//           >
//             <h3 className="text-gray-400">🔴 Hard</h3>
//             <p
//               className="
//               text-4xl
//               font-bold
//               text-red-400
//               mt-3
//               "
//             >
//               {profile.hard}
//             </p>
//           </div>
//         </div>

//         {/* STREAK SECTION */}
//         <div
//           className="
//           grid
//           md:grid-cols-2
//           gap-6
//           mt-8
//           "
//         >
//           <div
//             className="
//             bg-slate-900/80
//             border
//             border-slate-700
//             rounded-3xl
//             p-8
//             hover:border-orange-500/40
//             transition
//             "
//           >
//             <h3
//               className="
//               text-gray-400
//               text-lg
//               "
//             >
//               🔥 Current Streak
//             </h3>

//             <p
//               className="
//               text-5xl
//               font-bold
//               text-orange-400
//               mt-4
//               "
//             >
//               {profile.streak} Days
//             </p>

//             <p className="text-gray-500 mt-2">Keep solving daily 🚀</p>
//           </div>

//           <div
//             className="
//             bg-slate-900/80
//             border
//             border-slate-700
//             rounded-3xl
//             p-8
//             hover:border-purple-500/40
//             transition
//             "
//           >
//             <h3
//               className="
//               text-gray-400
//               text-lg
//               "
//             >
//               🏆 Longest Streak
//             </h3>

//             <p
//               className="
//               text-5xl
//               font-bold
//               text-purple-400
//               mt-4
//               "
//             >
//               {profile.longestStreak} Days
//             </p>

//             <p className="text-gray-500 mt-2">Your best consistency record</p>
//           </div>
//         </div>

//         {/* XP SECTION */}
//         <div
//           className="
//           mt-8
//           bg-linear-to-br
//           from-slate-900
//           to-purple-900/30
//           border
//           border-slate-700
//           rounded-3xl
//           p-8
//           "
//         >
//           <div
//             className="
//             flex
//             justify-between
//             items-center
//             "
//           >
//             <div>
//               <h2
//                 className="
//                 text-3xl
//                 font-bold
//                 "
//               >
//                 ⚡ Experience
//               </h2>

//               <p
//                 className="
//               text-gray-400
//               mt-2
//               "
//               >
//                 Level up your coding journey
//               </p>
//             </div>

//             <div
//               className="
//               bg-linear-to-r
//               from-purple-500
//               to-blue-500
//               px-8
//               py-4
//               rounded-2xl
//               font-bold
//               text-xl
//               shadow-lg
//               "
//             >
//               ⭐ {profile.level}
//             </div>
//           </div>

//           <div
//             className="
//             mt-8
//             flex
//             justify-between
//             items-center
//             "
//           >
//             <div>
//               <p className="text-gray-400">Current XP</p>

//               <h2
//                 className="
//                 text-5xl
//                 font-bold
//                 text-yellow-400
//                 mt-2
//                 "
//               >
//                 {profile.xp}
//                 <span className="text-2xl"> XP</span>
//               </h2>
//             </div>
//           </div>

//           {/* Progress */}
//           <div className="mt-8">
//             <div
//               className="
//               flex
//               justify-between
//               text-gray-400
//               mb-3
//               "
//             >
//               <span>Level Progress</span>

//               <span>{profile.xp}/100</span>
//             </div>

//             <div
//               className="
//               w-full
//               h-5
//               bg-slate-700
//               rounded-full
//               overflow-hidden
//               "
//             >
//               <div
//                 className="
//                 h-full
//                 bg-linear-to-r
//                 from-purple-500
//                 to-blue-500
//                 rounded-full
//                 transition-all
//                 duration-700
//                 "
//                 style={{
//                   width: `${Math.min(profile.xp, 100)}%`,
//                 }}
//               ></div>
//             </div>
//           </div>
//         </div>

//         {/* BADGES */}
//         <div
//           className="
//           mt-8
//           bg-slate-900/80
//           border
//           border-slate-700
//           rounded-3xl
//           p-8
//           "
//         >
//           <h2
//             className="
//             text-3xl
//             font-bold
//             "
//           >
//             🏆 Achievements
//           </h2>

//           <div
//             className="
//             flex
//             flex-wrap
//             gap-5
//             mt-6
//             "
//           >
//             {profile.badges?.map((badge, index) => (
//               <div
//                 key={index}
//                 className="
//                   bg-slate-800
//                   border
//                   border-slate-700
//                   px-6
//                   py-4
//                   rounded-2xl
//                   flex
//                   items-center
//                   gap-3
//                   hover:scale-105
//                   transition
//                   "
//               >
//                 <span className="text-3xl">{badge.icon}</span>

//                 <span
//                   className="
//                     font-semibold
//                     "
//                 >
//                   {badge.name}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CODING ACTIVITY */}
//         <div
//           className="
//           mt-8
//           bg-slate-900/80
//           border
//           border-slate-700
//           rounded-3xl
//           p-8
//           "
//         >
//           <div
//             className="
//             flex
//             justify-between
//             items-center
//             "
//           >
//             <h2
//               className="
//               text-3xl
//               font-bold
//               "
//             >
//               🔥 Coding Activity
//             </h2>

//             <p
//               className="
//               text-purple-400
//               font-semibold
//               "
//             >
//               {profile.streak} Day Streak
//             </p>
//           </div>

//           <div
//             className="
// mt-8
// overflow-x-auto
// "
//           >
//             <div
//               className="
// grid
// grid-flow-col
// grid-rows-7
// gap-1
// "
//             >
//               {Array.from({ length: 365 }).map((_, i) => {
//                 const date = new Date();

//                 date.setDate(date.getDate() - (364 - i));

//                 const dateString = date.toISOString().split("T")[0];

//                 const solvedToday = profile.activity?.includes(dateString);

//                 return (
//                   <div
//                     key={i}
//                     title={dateString}
//                     className={`
// w-4
// h-4
// rounded-sm
// cursor-pointer

// ${solvedToday ? "bg-green-500" : "bg-slate-700"}

// `}
//                   />
//                 );
//               })}
//             </div>
//           </div>

//           <p
//             className="
//             text-gray-500
//             mt-6
//             "
//           >
//             Every green box represents a coding day 🚀
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar from "../components/Navbar";

// // ---- Design tokens (AlgoForge "terminal" identity) -------------------
// // bg canvas   #0A0D12   surface #12161F   surface-2 #171C27
// // border      #232A38   text primary #EDEFF2   text muted #8993A8
// // easy #22C55E   medium #F5A623   hard #EF4444   ember (signature) #FF8A3D
// const FONT_DISPLAY = "'Space Grotesk', ui-sans-serif, system-ui, sans-serif";
// const FONT_MONO = "'JetBrains Mono', ui-monospace, SFMono-Regular, monospace";

// function useGoogleFonts() {
//   useEffect(() => {
//     if (document.getElementById("algoforge-fonts")) return;
//     const link = document.createElement("link");
//     link.id = "algoforge-fonts";
//     link.rel = "stylesheet";
//     link.href =
//       "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;500;700&display=swap";
//     document.head.appendChild(link);
//   }, []);
// }

// // Weeks of the last ~53 weeks as [{date, key}] rows of 7, for a GitHub/LeetCode
// // style month-wise activity grid.
// function buildWeeks(totalWeeks = 53) {
//   const totalDays = totalWeeks * 7;
//   const days = Array.from({ length: totalDays }).map((_, i) => {
//     const d = new Date();
//     d.setHours(0, 0, 0, 0);
//     d.setDate(d.getDate() - (totalDays - 1 - i));
//     return d;
//   });
//   const weeks = [];
//   for (let w = 0; w < totalWeeks; w++) {
//     weeks.push(days.slice(w * 7, w * 7 + 7));
//   }
//   return weeks;
// }

// function StatCard({ label, value, accent, sub }) {
//   return (
//     <div className="bg-[#12161F] border border-[#232A38] rounded-xl p-6 hover:border-[#FF8A3D]/40 transition-colors">
//       <p
//         className="text-[11px] uppercase tracking-[0.18em] text-[#8993A8]"
//         style={{ fontFamily: FONT_MONO }}
//       >
//         // {label}
//       </p>
//       <p
//         className="text-4xl md:text-5xl font-bold mt-4"
//         style={{ fontFamily: FONT_MONO, color: accent }}
//       >
//         {value}
//       </p>
//       {sub && <p className="text-[#5B6478] text-sm mt-2">{sub}</p>}
//     </div>
//   );
// }

// function Profile() {
//   const [profile, setProfile] = useState(null);
//   useGoogleFonts();

//   const months = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const res = await axios.get("http://localhost:5000/api/users/profile", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setProfile(res.data);
//       } catch (err) {
//         console.error("Failed to load profile:", err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   if (!profile) {
//     return (
//       <div className="min-h-screen bg-[#0A0D12] text-[#EDEFF2] flex justify-center items-center">
//         <p className="text-lg text-[#8993A8]" style={{ fontFamily: FONT_MONO }}>
//           $ fetching profile.json
//           <span className="inline-block w-2 h-4 bg-[#FF8A3D] ml-2 align-middle animate-pulse motion-reduce:animate-none" />
//         </p>
//       </div>
//     );
//   }

//   const easy = profile.easy || 0;
//   const medium = profile.medium || 0;
//   const hard = profile.hard || 0;
//   const difficultyTotal = easy + medium + hard || 1;

//   // Donut chart geometry
//   const R = 68;
//   const STROKE = 16;
//   const CIRC = 2 * Math.PI * R;
//   const easyLen = (easy / difficultyTotal) * CIRC;
//   const mediumLen = (medium / difficultyTotal) * CIRC;
//   const hardLen = (hard / difficultyTotal) * CIRC;

//   const weeks = buildWeeks(53);

//   return (
//     <div className="min-h-screen bg-[#0A0D12] text-[#EDEFF2] relative overflow-hidden">
//       {/* Faint code-grid backdrop instead of glow blobs */}
//       <div
//         className="absolute inset-0 pointer-events-none opacity-[0.05]"
//         style={{
//           backgroundImage:
//             "linear-gradient(#8993A8 1px, transparent 1px), linear-gradient(90deg, #8993A8 1px, transparent 1px)",
//           backgroundSize: "42px 42px",
//         }}
//       />

//       <Navbar />

//       <div className="relative pt-28 px-6 max-w-6xl mx-auto pb-16">
//         {/* PROFILE HEADER — terminal window chrome */}
//         <div className="bg-[#12161F] border border-[#232A38] rounded-xl overflow-hidden shadow-2xl">
//           <div className="flex items-center gap-2 px-5 py-3 border-b border-[#232A38] bg-[#0E1117]">
//             <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
//             <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
//             <span className="w-2.5 h-2.5 rounded-full bg-white/15" />
//             <p
//               className="ml-3 text-xs text-[#5B6478] truncate"
//               style={{ fontFamily: FONT_MONO }}
//             >
//               user@algoforge:~$ cat profile.json
//             </p>
//           </div>

//           <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
//             {/* Avatar */}
//             <div className="w-32 h-32 rounded-xl bg-[#0E1117] border border-[#FF8A3D]/40 flex items-center justify-center shrink-0">
//               <span
//                 className="text-5xl font-bold text-[#FF8A3D]"
//                 style={{ fontFamily: FONT_DISPLAY }}
//               >
//                 {profile.user.name.charAt(0).toUpperCase()}
//               </span>
//             </div>

//             {/* User info */}
//             <div className="flex-1 text-center md:text-left">
//               <h1
//                 className="text-4xl md:text-5xl font-bold"
//                 style={{ fontFamily: FONT_DISPLAY }}
//               >
//                 {profile.user.name}
//               </h1>
//               <p
//                 className="text-[#8993A8] mt-2"
//                 style={{ fontFamily: FONT_MONO }}
//               >
//                 {profile.user.email}
//               </p>
//               <span
//                 className="inline-flex mt-4 px-4 py-1.5 rounded-md border border-[#FF8A3D]/30 text-[#FF8A3D] text-xs tracking-wide uppercase"
//                 style={{ fontFamily: FONT_MONO }}
//               >
//                 Developer
//               </span>
//             </div>

//             {/* Total solved */}
//             <div className="text-center border-t md:border-t-0 md:border-l border-[#232A38] pt-6 md:pt-0 md:pl-8 w-full md:w-auto">
//               <p
//                 className="text-6xl font-bold text-[#EDEFF2]"
//                 style={{ fontFamily: FONT_MONO }}
//               >
//                 {profile.solved}
//               </p>
//               <p
//                 className="text-[#8993A8] text-xs uppercase tracking-[0.18em] mt-2"
//                 style={{ fontFamily: FONT_MONO }}
//               >
//                 Solved
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* DIFFICULTY BREAKDOWN — donut ring, LeetCode-style */}
//         <div className="mt-6 bg-[#12161F] border border-[#232A38] rounded-xl p-8">
//           <h2
//             className="text-xs uppercase tracking-[0.18em] text-[#8993A8] mb-6"
//             style={{ fontFamily: FONT_MONO }}
//           >
//             // problem difficulty
//           </h2>
//           <div className="flex flex-col sm:flex-row items-center gap-10">
//             <div className="relative w-44 h-44 shrink-0">
//               <svg viewBox="0 0 160 160" className="w-full h-full -rotate-90">
//                 <circle
//                   cx="80"
//                   cy="80"
//                   r={R}
//                   fill="none"
//                   stroke="#232A38"
//                   strokeWidth={STROKE}
//                 />
//                 <circle
//                   cx="80"
//                   cy="80"
//                   r={R}
//                   fill="none"
//                   stroke="#22C55E"
//                   strokeWidth={STROKE}
//                   strokeDasharray={`${easyLen} ${CIRC - easyLen}`}
//                   strokeDashoffset="0"
//                 />
//                 <circle
//                   cx="80"
//                   cy="80"
//                   r={R}
//                   fill="none"
//                   stroke="#F5A623"
//                   strokeWidth={STROKE}
//                   strokeDasharray={`${mediumLen} ${CIRC - mediumLen}`}
//                   strokeDashoffset={-easyLen}
//                 />
//                 <circle
//                   cx="80"
//                   cy="80"
//                   r={R}
//                   fill="none"
//                   stroke="#EF4444"
//                   strokeWidth={STROKE}
//                   strokeDasharray={`${hardLen} ${CIRC - hardLen}`}
//                   strokeDashoffset={-(easyLen + mediumLen)}
//                 />
//               </svg>
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <span
//                   className="text-3xl font-bold"
//                   style={{ fontFamily: FONT_MONO }}
//                 >
//                   {profile.solved}
//                 </span>
//                 <span className="text-[10px] uppercase tracking-widest text-[#5B6478]">
//                   solved
//                 </span>
//               </div>
//             </div>

//             <div className="flex-1 w-full space-y-4">
//               {[
//                 { label: "Easy", value: easy, color: "#22C55E" },
//                 { label: "Medium", value: medium, color: "#F5A623" },
//                 { label: "Hard", value: hard, color: "#EF4444" },
//               ].map((row) => (
//                 <div key={row.label} className="flex items-center gap-4">
//                   <span
//                     className="w-2.5 h-2.5 rounded-full shrink-0"
//                     style={{ backgroundColor: row.color }}
//                   />
//                   <span className="w-20 text-sm text-[#8993A8]">
//                     {row.label}
//                   </span>
//                   <div className="flex-1 h-2 rounded-full bg-[#0E1117] overflow-hidden">
//                     <div
//                       className="h-full rounded-full"
//                       style={{
//                         width: `${(row.value / difficultyTotal) * 100}%`,
//                         backgroundColor: row.color,
//                       }}
//                     />
//                   </div>
//                   <span
//                     className="w-10 text-right text-sm"
//                     style={{ fontFamily: FONT_MONO }}
//                   >
//                     {row.value}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* STREAKS */}
//         <div className="grid md:grid-cols-2 gap-6 mt-6">
//           <StatCard
//             label="current_streak"
//             value={`${profile.streak}d`}
//             accent="#FF8A3D"
//             sub="Keep the chain alive"
//           />
//           <StatCard
//             label="longest_streak"
//             value={`${profile.longestStreak}d`}
//             accent="#EDEFF2"
//             sub="Your best run yet"
//           />
//         </div>

//         {/* XP / LEVEL */}
//         <div className="mt-6 bg-[#12161F] border border-[#232A38] rounded-xl p-8">
//           <div className="flex flex-wrap justify-between items-center gap-4">
//             <div>
//               <h2
//                 className="text-xl font-bold"
//                 style={{ fontFamily: FONT_DISPLAY }}
//               >
//                 Experience
//               </h2>
//               <p className="text-[#8993A8] text-sm mt-1">
//                 Level up your coding journey
//               </p>
//             </div>
//             <span
//               className="px-5 py-2 rounded-md bg-[#0E1117] border border-[#FF8A3D]/40 text-[#FF8A3D] font-bold"
//               style={{ fontFamily: FONT_MONO }}
//             >
//               LVL {profile.level}
//             </span>
//           </div>

//           <div className="mt-8 flex items-baseline gap-2">
//             <span
//               className="text-4xl font-bold text-[#F5A623]"
//               style={{ fontFamily: FONT_MONO }}
//             >
//               {profile.xp}
//             </span>
//             <span className="text-[#5B6478]" style={{ fontFamily: FONT_MONO }}>
//               / 100 XP
//             </span>
//           </div>

//           <div className="mt-4 w-full h-2.5 rounded-full bg-[#0E1117] overflow-hidden">
//             <div
//               className="h-full rounded-full bg-linear-to-r from-[#FF8A3D] to-[#F5A623] transition-all duration-700"
//               style={{ width: `${Math.min(profile.xp, 100)}%` }}
//             />
//           </div>
//         </div>

//         {/* ACHIEVEMENTS */}
//         <div className="mt-6 bg-[#12161F] border border-[#232A38] rounded-xl p-8">
//           <h2
//             className="text-xs uppercase tracking-[0.18em] text-[#8993A8]"
//             style={{ fontFamily: FONT_MONO }}
//           >
//             // achievements ({profile.badges?.length || 0})
//           </h2>

//           {profile.badges?.length ? (
//             <div className="flex flex-wrap gap-4 mt-6">
//               {profile.badges.map((badge, index) => (
//                 <div
//                   key={index}
//                   className="bg-[#0E1117] border border-[#232A38] px-5 py-3 rounded-lg flex items-center gap-3 hover:border-[#FF8A3D]/40 hover:-translate-y-0.5 transition motion-reduce:transform-none"
//                 >
//                   <span className="text-2xl">{badge.icon}</span>
//                   <span className="font-semibold text-sm">{badge.name}</span>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-[#5B6478] text-sm mt-6">
//               No achievements yet — solve a problem to earn your first badge.
//             </p>
//           )}
//         </div>

//         {/* ACTIVITY — month-wise heatmap, LeetCode/GitHub style */}
//         <div className="mt-6 bg-[#12161F] border border-[#232A38] rounded-xl p-8">
//           <div className="flex justify-between items-center flex-wrap gap-2">
//             <h2
//               className="text-xs uppercase tracking-[0.18em] text-[#8993A8]"
//               style={{ fontFamily: FONT_MONO }}
//             >
//               // coding activity
//             </h2>
//             <p
//               className="text-[#FF8A3D] text-sm font-semibold"
//               style={{ fontFamily: FONT_MONO }}
//             >
//               {profile.streak} day streak
//             </p>
//           </div>

//           <div className="mt-10 overflow-x-auto">
//             <div className="flex gap-0.75 w-max">
//               {weeks.map((week, wi) => {
//                 const first = week[0];
//                 const prevFirst = wi > 0 ? weeks[wi - 1][0] : null;
//                 const showLabel =
//                   wi === 0 || first.getMonth() !== prevFirst.getMonth();
//                 return (
//                   <div key={wi} className="flex flex-col gap-0.75 relative">
//                     <span
//                       className="absolute -top-5 left-0 text-[10px] text-[#5B6478] whitespace-nowrap"
//                       style={{ fontFamily: FONT_MONO }}
//                     >
//                       {showLabel ? months[first.getMonth()] : ""}
//                     </span>
//                     {week.map((date, di) => {
//                       const dateString = date.toISOString().split("T")[0];
//                       const solvedToday =
//                         profile.activity?.includes(dateString);
//                       return (
//                         <div
//                           key={di}
//                           title={dateString}
//                           role="img"
//                           aria-label={
//                             solvedToday
//                               ? `Solved a problem on ${dateString}`
//                               : `No activity on ${dateString}`
//                           }
//                           className={`w-3 h-3 rounded-sm cursor-default ${
//                             solvedToday ? "bg-[#22C55E]" : "bg-[#232A38]"
//                           }`}
//                         />
//                       );
//                     })}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <p className="text-[#5B6478] text-sm mt-6">
//             Every green square represents a coding day.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Builds the last N weeks (7-day columns) for a month-wise activity grid,
// same idea LeetCode/GitHub use for their submission calendar.
function buildWeeks(totalWeeks = 53) {
  const totalDays = totalWeeks * 7;
  const days = Array.from({ length: totalDays }).map((_, i) => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    d.setDate(d.getDate() - (totalDays - 1 - i));
    return d;
  });
  const weeks = [];
  for (let w = 0; w < totalWeeks; w++) {
    weeks.push(days.slice(w * 7, w * 7 + 7));
  }
  return weeks;
}

function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:5000/api/users/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfile(res.data);
      } catch (err) {
        console.error("Failed to load profile:", err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex justify-center items-center text-xl">
        Loading Profile...
      </div>
    );
  }

  const easy = profile.easy || 0;
  const medium = profile.medium || 0;
  const hard = profile.hard || 0;
  const difficultyTotal = easy + medium + hard || 1;

  // Ring geometry
  const R = 66;
  const STROKE = 14;
  const CIRC = 2 * Math.PI * R;
  const easyLen = (easy / difficultyTotal) * CIRC;
  const mediumLen = (medium / difficultyTotal) * CIRC;
  const hardLen = (hard / difficultyTotal) * CIRC;

  const weeks = buildWeeks(53);
  const activeDays = profile.activity?.length || 0;

  return (
    <div className="min-h-screen bg-[#020617] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute right-20 top-40 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full"></div>

      <Navbar />

      <div className="relative pt-28 px-6 max-w-7xl mx-auto pb-16">
        <div className="grid lg:grid-cols-[320px_1fr] gap-6 items-start">
          {/* ================= LEFT: PROFILE SIDEBAR ================= */}
          <div className="space-y-6">
            {/* Profile card */}
            <div className="bg-linear-to-br from-purple-900/40 via-slate-900 to-blue-900/40 border border-slate-700 rounded-3xl p-8 text-center">
              <div className="w-28 h-28 mx-auto rounded-full bg-linear-to-r from-purple-500 to-blue-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-4xl font-bold">
                  {profile.user.name.charAt(0).toUpperCase()}
                </div>
              </div>

              <h1 className="text-2xl font-extrabold mt-5 bg-linear-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                {profile.user.name}
              </h1>
              <p className="text-gray-400 text-sm mt-1 truncate">
                {profile.user.email}
              </p>

              <div className="inline-flex mt-4 px-4 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-sm">
                ⭐ Level {profile.level}
              </div>

              <button className="w-full mt-6 py-2.5 rounded-xl bg-linear-to-r from-purple-500 to-blue-500 font-semibold hover:opacity-90 transition">
                Edit Profile
              </button>

              {/* XP mini bar */}
              <div className="mt-6 text-left">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>XP</span>
                  <span>{profile.xp}/100</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-purple-500 to-blue-500 rounded-full transition-all duration-700"
                    style={{ width: `${Math.min(profile.xp, 100)}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-6">
              <h2 className="text-lg font-bold mb-2">Your Stats</h2>

              <div className="flex items-center justify-between py-3 border-b border-slate-800">
                <span className="flex items-center gap-2 text-gray-300">
                  🔥 Current Streak
                </span>
                <span className="font-bold text-orange-400">
                  {profile.streak} days
                </span>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-slate-800">
                <span className="flex items-center gap-2 text-gray-300">
                  🏆 Longest Streak
                </span>
                <span className="font-bold text-purple-300">
                  {profile.longestStreak} days
                </span>
              </div>

              <div className="flex items-center justify-between py-3">
                <span className="flex items-center gap-2 text-gray-300">
                  🎖️ Badges Earned
                </span>
                <span className="font-bold text-blue-300">
                  {profile.badges?.length || 0}
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: SOLVED / BADGES / ACTIVITY ================= */}
          <div className="space-y-6">
            <div className="grid md:grid-cols-[1fr_300px] gap-6">
              {/* Difficulty ring */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-8">
                <div className="flex flex-col sm:flex-row items-center gap-8">
                  <div className="relative w-44 h-44 shrink-0">
                    <svg
                      viewBox="0 0 160 160"
                      className="w-full h-full -rotate-90"
                    >
                      <circle
                        cx="80"
                        cy="80"
                        r={R}
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth={STROKE}
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r={R}
                        fill="none"
                        stroke="#4ade80"
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={`${easyLen} ${CIRC - easyLen}`}
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r={R}
                        fill="none"
                        stroke="#facc15"
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={`${mediumLen} ${CIRC - mediumLen}`}
                        strokeDashoffset={-easyLen}
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r={R}
                        fill="none"
                        stroke="#f87171"
                        strokeWidth={STROKE}
                        strokeLinecap="round"
                        strokeDasharray={`${hardLen} ${CIRC - hardLen}`}
                        strokeDashoffset={-(easyLen + mediumLen)}
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-4xl font-bold">
                        {profile.solved}
                      </span>
                      <span className="text-gray-400 text-sm mt-1">Solved</span>
                    </div>
                  </div>

                  <div className="flex-1 w-full grid grid-cols-3 sm:grid-cols-1 gap-3">
                    <div className="bg-linear-to-br from-green-900/40 to-slate-900 border border-green-500/30 rounded-2xl px-5 py-3 flex sm:justify-between items-center gap-2 flex-col sm:flex-row hover:scale-105 transition">
                      <span className="text-green-400 font-semibold">Easy</span>
                      <span className="text-2xl font-bold">{easy}</span>
                    </div>
                    <div className="bg-linear-to-br from-yellow-900/40 to-slate-900 border border-yellow-500/30 rounded-2xl px-5 py-3 flex sm:justify-between items-center gap-2 flex-col sm:flex-row hover:scale-105 transition">
                      <span className="text-yellow-400 font-semibold">
                        Medium
                      </span>
                      <span className="text-2xl font-bold">{medium}</span>
                    </div>
                    <div className="bg-linear-to-br from-red-900/40 to-slate-900 border border-red-500/30 rounded-2xl px-5 py-3 flex sm:justify-between items-center gap-2 flex-col sm:flex-row hover:scale-105 transition">
                      <span className="text-red-400 font-semibold">Hard</span>
                      <span className="text-2xl font-bold">{hard}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-6 flex flex-col">
                <h2 className="text-lg font-bold">
                  🏆 Badges{" "}
                  <span className="text-purple-300">
                    {profile.badges?.length || 0}
                  </span>
                </h2>

                {profile.badges?.length ? (
                  <div className="flex flex-wrap gap-3 mt-5">
                    {profile.badges.map((badge, index) => (
                      <div
                        key={index}
                        className="bg-slate-800 border border-slate-700 px-4 py-2.5 rounded-xl flex items-center gap-2 hover:scale-105 transition"
                      >
                        <span className="text-xl">{badge.icon}</span>
                        <span className="text-sm font-semibold">
                          {badge.name}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm mt-5">
                    No badges yet — keep solving to unlock your first one 🚀
                  </p>
                )}
              </div>
            </div>

            {/* Activity heatmap */}
            <div className="bg-slate-900/80 border border-slate-700 rounded-3xl p-8">
              <div className="flex flex-wrap justify-between items-center gap-3">
                <h2 className="text-xl font-bold">
                  {activeDays}{" "}
                  <span className="text-gray-400 font-normal">
                    active days in the past year
                  </span>
                </h2>
                <p className="text-sm text-gray-400">
                  Current streak:{" "}
                  <span className="text-orange-400 font-semibold">
                    {profile.streak}
                  </span>{" "}
                  · Max streak:{" "}
                  <span className="text-purple-300 font-semibold">
                    {profile.longestStreak}
                  </span>
                </p>
              </div>

              <div className="mt-8 overflow-x-auto">
                <div className="flex gap-1 w-max">
                  {weeks.map((week, wi) => {
                    const first = week[0];
                    const prevFirst = wi > 0 ? weeks[wi - 1][0] : null;
                    const showLabel =
                      wi === 0 || first.getMonth() !== prevFirst.getMonth();
                    return (
                      <div key={wi} className="flex flex-col gap-1 relative">
                        <span className="absolute -top-5 left-0 text-[10px] text-gray-500 whitespace-nowrap">
                          {showLabel ? months[first.getMonth()] : ""}
                        </span>
                        {week.map((date, di) => {
                          const dateString = date.toISOString().split("T")[0];
                          const solvedToday =
                            profile.activity?.includes(dateString);
                          return (
                            <div
                              key={di}
                              title={dateString}
                              className={`w-4 h-4 rounded-sm cursor-pointer transition ${
                                solvedToday ? "bg-green-500" : "bg-slate-700"
                              }`}
                            />
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>

              <p className="text-gray-500 mt-6 text-sm">
                Every green box represents a coding day 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
