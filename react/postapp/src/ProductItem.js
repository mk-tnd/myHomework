function ProductItem (props){
    return (
        <div>
            <h1>Title : {props.title}</h1>
            <h1>description: {props.description}</h1>
            <h1>price : {props.price}</h1>
        </div>
    )
}

export default ProductItem