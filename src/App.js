import MainPage from "./pages/MainPage";
import CollectionPage from "./pages/CollectionPage";
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="account" element={<div>Account</div>} />
      <Route path="collection/women" element={<CollectionPage title="women-collection" />} />
      <Route path="collection/men" element={<CollectionPage title="men-collection" />} />
    </Routes>
  );
}

export default App;
