import React from 'react';
import axios from 'axios';
import { API_URL } from '../Supports/helper';

class DetailProduct extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        detail: {}
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

    render() {
        let { detail } = this.state;
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
                        <h2>{detail.name}</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailProduct;