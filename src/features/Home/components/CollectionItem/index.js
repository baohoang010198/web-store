import React from 'react'
import PropTypes from 'prop-types'
import "./CollectionItem.css";
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
function CollectionItem(props) {
    const { productCollectionItem } =props
    const history = useHistory();
    const handleOnClickCollectionItem = (id)=>{
        history.push(`/products/${id}`);
    }

    return (
        <div className="Collection-item-wrap" onClick={ ()=>{ handleOnClickCollectionItem(productCollectionItem.id) }}>
            <div className="Collection-item-img-wrap" >
                <img src={productCollectionItem.image} alt="oppps" className="Collection-item-img"/>
                <div className="Collection-item-img-overlay"></div>
            </div>
            <Row className="Collection-item-content">

                <Col 
                    xs={20} sm={20} md={20} lg={20} xl={20} 
                    className="collection-item-title"
                >
                    <p>{ productCollectionItem.title }</p>
                </Col>
                <Col 
                    xs={4} sm={4} md={4} lg={4} xl={4} 
                    className="collection-item-price"
                >
                    <p>{ productCollectionItem.price }$</p>
                </Col>
            </Row>

        </div>
    )
}

CollectionItem.propTypes = {
    productCollectionItem:PropTypes.object.isRequired,
}
CollectionItem.defaultProps={
    productCollectionItem:null,
}

export default CollectionItem

