import { Link } from "react-router-dom";
import styled from "styled-components";


const Photo = styled.img`
height: 400px;
width: 400px;
`

function CategoryPage(props) {
    return <>
        <h1>{props.title}</h1>
        <div>
            {props.data.map((product) => <Link>
                <Photo src={product.src}></Photo>
                <h2>{product.title}</h2>
                <h3>{product.price}</h3>

            </Link>
            )}
        </div>

    </>
}

export default CategoryPage;