import React, { useEffect, useState } from 'react';
import productApi from '../../../../api/productApi';
import Banner from '../../../../components/Banner';
import Loader from '../../../../components/Loader';
import Collection from '../../components/Collection';
import HotProduct from '../../components/HotProduct';
import Flip  from 'react-reveal/Fade';
function MainPage(props) {
    
    const [productCollection,setProductCollection] = useState();
    const [productClothes,setProductClothes] = useState([]);
    const [productJewelery,setProductJewelery] = useState([]);
    const [isloadding,setIsloadding] = useState(false);

    useEffect(() => {
        const fetchProductData = async () =>{
        try {
            const paramsCollection={
                limit:6,
            }
            const paramsHight={
                limit:2,
            }
            const categoryTrendding = "men clothing";
            const categoryJewelery = "jewelery"
            const ProductClothes = await productApi.getAllProductCategory(paramsHight,categoryTrendding);
            setProductClothes(ProductClothes);
            const ProductJewelery = await productApi.getAllProductCategory(paramsHight,categoryJewelery);
            setProductJewelery(ProductJewelery);
            const ProductCollection = await productApi.getAll(paramsCollection);
            await setProductCollection(ProductCollection);
            setIsloadding(true);
        } catch (error) {
            console.log(error);
        }
        }
        fetchProductData();
    }, []);
    if(!isloadding){
        return <Loader/>
    }
    else{
        return (
            <>
                <Flip >
                    <Banner/>
                    <HotProduct Divider="CLOTHES" product={productClothes} />
                    <HotProduct Divider = "JEWELERY" product={ productJewelery }/>
                    <Collection productCollection={productCollection}/>
                </Flip >
            </>
        )
    }
}

MainPage.propTypes = {

}

export default MainPage

