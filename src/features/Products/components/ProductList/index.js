import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'antd'
import ProductCard from '../ProductCard';
import Fade from 'react-reveal/Fade';
function ProductList(props) {
    const { productList } = props;
    return (
        <Row >
            {productList.map(product => (
                    <Col  
                        key={product.id}
                        xs={24} sm={12} md={12} lg={8} xl={6}
                    >
                    <Fade  bottom>
                        <ProductCard
                            product={product}
                        />
                    </Fade>
                    </Col>
            ))}
        </Row>
    )
}

ProductList.propTypes = {
    productList : PropTypes.array,
}

ProductList.defaultProps = {
    productList: [],
};
export default ProductList

