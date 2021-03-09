import React from 'react'
import "./Loader.css";
function Loader(props) {
    return (
        <div className="wrap-loader"> 
            <div className="loader">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <span>Loading</span>
            </div>
        </div>

    )
}

export default Loader

