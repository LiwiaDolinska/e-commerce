import MainPage from "./pages/MainPage";
import CollectionPage from "./pages/CollectionPage";
import { Routes, Route, Link } from "react-router-dom";
import { womenCollectionPhotos } from "./collectionPhotos";
import { menCollectionPhotos } from "./collectionPhotos";
import CategoryPage from "./pages/CategoryPage";



function App() {
  return (

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="account" element={<div>Account</div>} />
      <Route path="collection/women" element={<CollectionPage title="Women Collection" data={womenCollectionPhotos} />} />
      <Route path="collection/men" element={<CollectionPage title="Men Collection" data={menCollectionPhotos} />} />
      <Route path="collection/women/*" element={<CategoryPage title="Bluzki" />} />
    </Routes>
  );
}

export default App;
