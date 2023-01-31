import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { useState } from "react";
import Dashboard from "./Dashboard";
import UserLogin from "./user/UserLogin";
import UserRegister from "./user/UserRegister";
import AdminLogin from "./admin/AdminLogin";
import FileUploader from "./FileUploader";
function App() {
  const [search, setSearch] = useState("");
  return (
    <Router>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="App" style={{ minHeight: "93vh" }}>
        <Route path="/" component={LandingPage} exact />
        <Route path="/userlogin" component={UserLogin} />
        <Route path="/userregister" component={UserRegister} />
        <Route path="/adminlogin" component={AdminLogin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/newnotice" component={FileUploader} />
      </main>
      <Footer />
    </Router>
  );
}
export default App;
