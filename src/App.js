import MainPage from "./pages/MainPage";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="account" element={<div>Account</div>} />
    </Routes>
  );
}

export default App;
