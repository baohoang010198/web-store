import React from 'react'
import PropTypes from 'prop-types'
import Slider from 'react-slick';
import CollectionItem from '../CollectionItem';
import "./Collection.css";
import { SampleNextArrow, SamplePrevArrow } from '../../../Products/pages/Details';

function Collection(props) {
    const { productCollection } = props;
    const settings = {
        dot:false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        initialSlide: 0,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                initialSlide: 2,
                infinite: true,
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 1,
                initialSlide: 1
              }
            },
          ]
      };
    return (
        <div>
            <h1>Collection</h1>
            <div className="Collection">
                <Slider {...settings}>
                {
                    productCollection.map((productCollectionItem,index)=>(
                        <div>
                            <CollectionItem productCollectionItem={ productCollectionItem } key={ index }/>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </div>
    )
}

Collection.propTypes = {
    productCollection:PropTypes.array,
}
Collection.defaultProps={
    productCollection:null,
}

export default Collection

