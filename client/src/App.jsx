import Profile from "./pages/Profile";
import MySubmissions from "./pages/MySubmissions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Submissions from "./pages/Submissions";
import Discuss from "./pages/Discuss";
import DiscussionDetail from "./pages/DiscussionDetail";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Problems from "./pages/Problems";
import CodeEditor from "./pages/CodeEditor";
import CreateDiscussion from "./pages/CreateDiscussion";

import AddProblem from "./pages/AddProblem";
import AdminDashboard from "./pages/AdminDashboard";
import ManageProblems from "./pages/ManageProblems";
import Users from "./pages/Users";
import Statistics from "./pages/Statistics";
import Leaderboard from "./pages/Leaderboard";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problems" element={<Problems />} />
        <Route path="/problems/:id" element={<CodeEditor />} />

        <Route path="/submissions" element={<Submissions />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/my-submissions" element={<MySubmissions />} />
        <Route path="/profile" element={<Profile />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/add-problem" element={<AddProblem />} />

        <Route path="/admin/edit-problem/:id" element={<AddProblem />} />

        <Route path="/admin/users" element={<Users />} />

        <Route path="/admin/stats" element={<Statistics />} />

        <Route path="/admin/problems" element={<ManageProblems />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/discuss" element={<Discuss />} />

        <Route path="/discuss" element={<Discuss />} />
        <Route path="/discuss/:id" element={<DiscussionDetail />} />
        <Route path="/create-discussion" element={<CreateDiscussion />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
