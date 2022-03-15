import React from 'react';
import axios from 'axios';
import { API_URL } from '../Supports/helper';

const ManageProducts = () => {
    // useState : untuk menyimpan data state pada functional component
    const [products, setProducts] = React.useState([]);
    const [activePage, setActivePage] = React.useState(1);

    const getProducts = () => {
        axios.get(API_URL + "/products")
            .then((response) => {
                console.log(response.data);
                setProducts(response.data); // menyimpan data kedalam state
            }).catch((error) => {
                console.log(error)
            })
    }

    // useEffect : digunakan untuk menggantikan componentDidMount/componentDidUpdate
    React.useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            <h2>Manage Products</h2>
        </div>
    )
}
export default ManageProducts;