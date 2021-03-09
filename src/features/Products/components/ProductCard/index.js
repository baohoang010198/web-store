import React from 'react'
import PropTypes from 'prop-types'
import "./ProductCard.css";
import { useHistory } from 'react-router-dom';

function ProductCard(props) {
    const history = useHistory();
    const { product } = props;
    const handleDetailsClick = () =>{
        const urlDetails = `/products/${ product.id }`
        history.push(urlDetails);
    }

    return (
        <div className="card">
            <div className="thumb" style={{backgroundImage:`url(${product.image})`}}></div>
            <div className="title">
                <h1>{product.title}</h1>
            </div>
            <div className="price">
                <p className="price-text">${product.price}</p>
            </div>
            <div className="overlay-btn">
            <p><button onClick={handleDetailsClick}>Detail</button></p>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product : PropTypes.object.isRequired,
}

ProductCard.defaultProps = {
    product: null,
};

export default ProductCard

