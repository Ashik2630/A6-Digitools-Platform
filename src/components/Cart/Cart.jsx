import React from 'react';
import shoppingCart from '../../assets/products/shoppingCart.png'

const Cart = ({selectedBuy}) => {
    console.log(selectedBuy)
    return (
        <div className='w-250 h-100 shadow-xl  mb-20 ml-40 px-5 rounded-2xl'>
            <h1 className='text-3xl font-bold'>Your Cart</h1>
            <img className='mx-auto w-20 mt-10' src={shoppingCart} alt="" />
            <p className='text-[18px] text-center mt-2'>Your carT is empty, add a product.</p>
        </div>
    );
};

export default Cart;