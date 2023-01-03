import MainPage from "./pages/MainPage";
import CollectionPage from "./pages/CollectionPage";
import { Routes, Route, Link } from "react-router-dom";
import { womenCollectionPhotos } from "./collectionPhotos";
import { menCollectionPhotos } from "./collectionPhotos";
import CategoryPage from "./pages/CategoryPage";
import { womenCategoryProducts, menCategoryProducts } from "./categoryPhotos";
import ProductPage from "./pages/ProductPage";



function App() {
  return (

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="account" element={<div>Account</div>} />
      <Route path="collection/women" element={<CollectionPage title="Women Collection" data={womenCollectionPhotos} />} />
      <Route path="collection/men" element={<CollectionPage title="Men Collection" data={menCollectionPhotos} />} />
      <Route path="collection/women/*" element={<CategoryPage title="Bluzki" data={womenCategoryProducts} />} />
      <Route path="collection/men/*" element={<CategoryPage title="Eleganckie" data={menCategoryProducts} />} />
      <Route path="product/:productId" element={<ProductPage />} />
    </Routes>
  );
}

export default App;
