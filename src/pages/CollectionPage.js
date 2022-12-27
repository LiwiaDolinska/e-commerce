import styled from "styled-components";
import { Link } from "react-router-dom"

const PhotoBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
font-family: 'Lato', sans-serif;
cursor: pointer;
`
const MappedPhoto = styled.div`
position: relative; 
`
const Image = styled.img`
object-fit: cover;
`
const Category = styled.h2`
position: absolute;
color: white;
top: 0;
left: 0;
`

function CollectionPage(props) {
    return <>
        <h1>{props.title}</h1>
        <PhotoBox>{props.data.map((category) => <Link to={category.link}><MappedPhoto>
            <Image src={category.src} height="550" width="400" />
            <Category> {category.title}</Category>
        </MappedPhoto></Link>)}
        </PhotoBox>
    </>
}

export default CollectionPage;