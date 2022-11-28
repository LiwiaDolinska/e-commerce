
function CollectionPage(props) {
    return <>
        <h1>{props.title}</h1>
        <div>{props.data.map((photo) => <div>
            <img src={photo.src} height="250" width="250" />
            <h2> {photo.title}</h2>
        </div>)}
        </div>
    </>
}

export default CollectionPage;