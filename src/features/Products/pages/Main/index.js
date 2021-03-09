import React, { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Banner from '../../../../components/Banner';
import ProductList from '../../components/ProductList';
import Flip  from 'react-reveal/Fade';
import { useParams } from 'react-router-dom';
import productApi from '../../../../api/productApi';

function MainPage(props) {

    const products = useSelector(state => state.products);
    const [ProductCategory, setProductCategory] = useState([]);
    const { category } = useParams();
    const fetchProductData = useCallback(
        async () => {
            try {
                const ProductClothes = await productApi.getAllProductCategory(null,category);
                setProductCategory(ProductClothes);
            } catch (error) {
                console.log(error);
            }
        },
        [category],
        );
    useEffect(() => {
        fetchProductData();
    }, [fetchProductData]);
    const ProductsList = ProductCategory.length>0?(
        <>
            <h1>All Products ({ProductCategory.length})</h1>
            <ProductList 
                productList={ProductCategory}
            />
        </>
    ):(
        <>
            <h1>All Products ({products.length})</h1>
            <ProductList 
                productList={products}
            />
        </>
    )
    return (
        <>
            <Flip>
                <Banner/> 
                { ProductsList }
            </Flip>
        </>
    )
}

MainPage.propTypes = {

}

export default MainPage

