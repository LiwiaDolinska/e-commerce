import styled from "styled-components";

const PhotoBox = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-around;
font-family: 'Lato', sans-serif;
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
        <PhotoBox>{props.data.map((photo) => <MappedPhoto>
            <Image src={photo.src} height="550" width="400" />
            <Category> {photo.title}</Category>
        </MappedPhoto>)}
        </PhotoBox>
    </>
}

export default CollectionPage;