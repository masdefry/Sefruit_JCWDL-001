import React from 'react';

const CardProduct = (props) => {
    let { detail } = props;
    return (
        <div className="card">
            <img src={detail.images[0]} className="card-img-top" alt="..." />
            <div className="card-body d-flex justify-content-between">
                <h5 className="card-title">{detail.name}</h5>
                <h5 className="card-title" style={{ fontWeight: "600" }}>
                    Rp. {detail.price.toLocaleString()}
                </h5>
            </div>
            <button className='btn btn-info'>Add To Cart</button>
        </div>
    )
}

export default CardProduct;