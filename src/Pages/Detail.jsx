import React from 'react';
import axios from 'axios';
import { API_URL } from '../Supports/helper';

class DetailProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        detail: {},
        qty: 1
    }

    componentDidMount() {
        this.getDetailProduct()
    }

    getDetailProduct = () => {
        console.log(window.location.search)
        axios.get(API_URL + `/products${window.location.search}`)
            .then((res) => {
                console.log(res.data);
                this.setState({ detail: res.data[0] })
            }).catch((err) => {
                console.log(err);
            })
    }

    handleInc = () => {
        let temp = this.state.qty;
        temp += 1;
        this.setState({ qty: temp });
    }
    
    handleDec = () => {
        let temp = this.state.qty;
        temp -= 1;
        this.setState({ qty: temp });
    }

    render() {
        let { detail, qty } = this.state;
        return (
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        {
                            detail.images &&
                            <img src={detail.images[0]} alt={`sefruit-${detail.name}`} width="100%" />
                        }
                    </div>
                    <div className='col-md-6'>
                        <h2 className='fw-bold'>{detail.name}</h2>
                        <h5 className='fw-bold mt-4'>Description</h5>
                        <p>{detail.description}</p>
                        <div className='d-flex'>
                            <div>
                                <h5 className='fw-bold mt-4'>Weight</h5>
                                <h6 className='text-muted'>{detail.weight} gram</h6>
                            </div>
                            <div className='mx-5'>
                                <h5 className='fw-bold mt-4'>How many buy ?</h5>
                                <div className='d-flex align-items-center'>
                                    <button className='btn btn-outline-warning'
                                     onClick={this.handleDec}
                                     disabled={ this.state.qty == 1 ?true:false }
                                     >-</button>
                                    <h5 className='mx-2'>{qty}</h5>
                                    <button className='btn btn-outline-primary' onClick={this.handleInc}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailProduct;