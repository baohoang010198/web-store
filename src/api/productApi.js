import axiosClient from "./axiosClient";

const productApi = {
    getAll: (params) =>{
        const url = '/products';
        return axiosClient.get(url,{ params });
    },

    getAllProductCategory: (params,category) =>{
        const url = `/products/category/${category}`;
        return axiosClient.get(url,{ params });
    },

    get: (id)=>{
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },
    getAllCategory: () =>{
        const url = `/products/categories`;
        return axiosClient.get(url);
    },
}

export default productApi;