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
import FavouritePage from "./pages/FavouritePage";
import { faV } from "@fortawesome/free-solid-svg-icons";
import SearchPage from "./pages/SearchPage";
import FormPage from "./pages/FormPage";
import SummaryPage from "./pages/SummaryPage"

function App() {
  const [productsInBasket, setProductsInBasket] = useState([])
  const [favouriteProducts, setFavouriteProducts] = useState([])
  const [formData, setFormData] = useState()


  const handleAddProduct = (item) => {
    setProductsInBasket([...productsInBasket, item])
  }

  const handleAddToFavourite = (item) => {
    setFavouriteProducts([...favouriteProducts, item])
  }

  const handleChangeQuantity = (id, quantity) => {
    const productsWithNewQuantity = productsInBasket.map(product => {
      if (id === product.id) {
        return { ...product, quantity }
      } else {
        return product
      }
    })
    setProductsInBasket(productsWithNewQuantity)
  }

  const handleRemoveFromFavourite = (id) => {
    const productsWithoutRemoved = favouriteProducts.filter(element => id === element.id)
    setFavouriteProducts(productsWithoutRemoved)
  }

  const handleFormData = (data) => {
    setFormData(data)
  }


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
        <Route path="product/:productId" element={<ProductPage onAddToBasket={handleAddProduct} onAddToFavourite={handleAddToFavourite} onRemoveFromFavourite={handleRemoveFromFavourite} favouriteProducts={favouriteProducts} onChangeQuantity={handleChangeQuantity} productsInBasket={productsInBasket} />} />
        <Route path="basket" element={<BasketPage productsInBasket={productsInBasket} handleChangeQuantity={handleChangeQuantity} />} />
        <Route path="favourite" element={<FavouritePage favouriteProducts={favouriteProducts} />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="form" element={<FormPage onSubmit={handleFormData} />} />
        <Route path="summary" element={<SummaryPage formData={formData} />} />
      </Routes>
    </>
  );
}

export default App;
