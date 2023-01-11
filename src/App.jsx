import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Test from "./components/Test";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Reporting from "./pages/Reporting";
import Tasks from "./pages/Tasks";
import Users from "./pages/Users";
import TheHeader from "./components/TheHeader";
import Overview from "./pages/Overview";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Details from "./pages/settings/Details";
import Profile from "./pages/settings/Profile";
import Password from "./pages/settings/Password";
import Team from "./pages/settings/Team";
import Plan from "./pages/settings/Plan";
import Billing from "./pages/settings/Billing";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TheHeader />
        <Routes>
          <Route path="/test" element={<Test />}></Route>
          <Route path="/" element={<Overview />}>
            <Route index element={<Navigate to="/settings" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="reporting" element={<Reporting />} />
            <Route path="users" element={<Users />} />
            <Route path="settings/*" element={<Settings />}>
              <Route
                index
                element={<Navigate to="/settings/billing" replace />}
              />
              <Route path="my-details" element={<Details />} />
              <Route path="profile" element={<Profile />} />
              <Route path="password" element={<Password />} />
              <Route path="team" element={<Team />} />
              <Route path="plan" element={<Plan />} />
              <Route path="billing" element={<Billing />} />
            </Route>
            <Route path="support" element={<Support />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
