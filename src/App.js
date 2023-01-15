import MainPage from "./pages/MainPage";
import CollectionPage from "./pages/CollectionPage";
import { Routes, Route, Link, useSearchParams } from "react-router-dom";
import { womenCollectionPhotos } from "./collectionPhotos";
import { menCollectionPhotos } from "./collectionPhotos";
import CategoryPage from "./pages/CategoryPage";
import { womenCategoryProducts, menCategoryProducts } from "./categoryPhotos";
import ProductPage from "./pages/ProductPage";
import Header from "./components/Header";
import BasketPage from "./pages/BasketPage";
import { useState } from "react";


function App() {
  const [productsInBasket, setProductsInBasket] = useState([])

  const handleAddProduct = (item) => {
    console.log(item)
    setProductsInBasket([...productsInBasket, item])
  }

  console.log(productsInBasket)
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="account" element={<div>Account</div>} />
        <Route path="collection/women" element={<CollectionPage title="Women Collection" data={womenCollectionPhotos} />} />
        <Route path="collection/men" element={<CollectionPage title="Men Collection" data={menCollectionPhotos} />} />
        <Route path="collection/women/*" element={<CategoryPage title="Bluzki" data={womenCategoryProducts} />} />
        <Route path="collection/men/*" element={<CategoryPage title="Eleganckie" data={menCategoryProducts} />} />
        <Route path="product/:productId" element={<ProductPage onAddToBasket={handleAddProduct} />} />
        <Route path="basket" element={<BasketPage productsInBasket={productsInBasket} />} />
      </Routes>
    </>
  );
}

export default App;
