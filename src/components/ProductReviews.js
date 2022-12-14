import React from 'react'
import '../styles/ProductReviews.css'

const ProductReviews = ({ productReviews }) => {
    return (
        <div className='productreviews'>
            {
                productReviews.map((item, index) => (
                    <div className='productReviewsCard'>
                        <img src={item.image} alt={`${index} product`} />
                        <h5>{item.review}</h5>
                        <p>{item.name}</p>
                        <span>{item.price}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductReviews
