import { useSearchParams } from "react-router-dom"
import { allProducts } from "../categoryPhotos"
import ProductBox from "../components/ProductBox"
import Listing from "../components/Listing"

function SearchPage() {
    const [searchParams] = useSearchParams()
    const searchValue = searchParams.get("phrase")
    const filteredProducts = allProducts.filter((product) => {
        return product.title.toLowerCase() === searchValue.toLowerCase()
    })

    return <Listing>{filteredProducts.map(product =>
        <ProductBox product={product} />)}</Listing>
}
export default SearchPage