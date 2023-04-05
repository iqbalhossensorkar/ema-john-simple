import React, { useState } from 'react';
import Order from '../Order/Order';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css'
import { removeFromDb } from '../../utilities/fakedb';

const Review = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)
    const handleCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    return (
        <div className='review-container'>
            <div className='cart-container'>
                {
                    cart.map(product => <ReviewItem key={cart.id} product={product} handleCart={handleCart}></ReviewItem>)
                }
            </div>
            <div className='order-side'>
                <Order cart={cart}></Order>

            </div>
        </div>
    );
};

export default Review;