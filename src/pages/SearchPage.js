import { useSearchParams } from "react-router-dom"
import { allProducts } from "../categoryPhotos"

function SearchPage() {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchValue = searchParams.get("phrase")
    const filteredProducts = allProducts.filter((product) => {
        return product.title.toLowerCase() === searchValue.toLowerCase()
    })

    return <p>{filteredProducts.map(product => <img src={product.src}></img>)}</p>
}
export default SearchPage