import React from 'react';

function Product (props){
    return (
        <div className="product">
            <h1 style={{color:"orange"}}> Name: {props.product.name}</h1>
            <h2 style={{color:"green"}}>Price: {props.product.price}</h2>
            <h3 style={{color:"pink"}}>Description: {props.product.description}</h3>
        </div>
    )
}

export default Product;