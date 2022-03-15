import React from 'react';
import axios from 'axios';
import { API_URL } from '../Supports/helper'
import CardProduct from '../Components/CardProduct';

class ProductsPage extends React.Component {
    state = {
        products: [],
        activePage: 1
    }

    componentDidMount() {
        this.getProducts();
    }

    // get products from API
    getProducts = () => {
        // 1. Merequest data dari fake API JSON-Server menggunakan Methode GET
        axios.get(API_URL + "/products")
            .then((res) => {
                // 2. Jika mendapat response, maka disimpan kedalam state products
                console.table(res.data);// untuk memeriksa data apakah sudah diterima
                this.setState({ products: res.data }); // menyimpan response data kedalam state
            }).catch((err) => {
                // 3. Jika ada error, maka akan dimunculkan di inspect console browser
                console.log(err)
            })
    }

    printProducts = () => {
        let { products, activePage } = this.state; // destructuring
        // page 1 : 0-8
        // page 2 : 8-16
        // page 3 : 16-24
        return products.slice(activePage == 1 ? activePage - 1 : (activePage - 1) * 8, activePage * 8).map((value, index) => {
            return <div className='col-12 col-md-6 col-lg-3 my-2' key={value.id}>
                <CardProduct detail={value} />
            </div>
        })
    }

    printBtPagination = () => {
        // 1-8 data => 1 button
        // 9-16 data => 2 button
        // 17-24 data => 3 button
        let btn = [];
        for (let i = 0; i < Math.ceil(this.state.products.length / 8); i++) {
            btn.push(<button className={`btn ${this.state.activePage == i + 1 ? "btn-info" : "btn-outline-info"}`}
                disabled={this.state.activePage == i + 1 ? true : false}
                onClick={() => this.setState({ activePage: i + 1 })}>
                {i + 1}
            </button>)
        }
        return btn;
    }

    render() {
        return (
            <div className="container py-4">
                <div className='row'>
                    {this.printProducts()}
                </div>
                {this.printBtPagination()}
            </div>
        );
    }
}

export default ProductsPage;