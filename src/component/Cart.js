import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/action'
const Cart = () => {
    const dispatch = useDispatch()
    const cartItem = useSelector(state => state?.cartData)
    const amount = cartItem?.length && cartItem?.map((item) => (item.price)).reduce((prev, next) => prev + next)
    let gst = 18 * amount / 100
    let discount = 5 * amount / 100
    return (
        <div>
            {cartItem.length ? (
                <div className='cart'>
                    <div className='cart-container-1'>
                        {cartItem?.map((item) => (
                            <div className='cartItem' key={item?.id}>
                                <div className='container-item'>
                                    <div>
                                        <img src={item?.image} alt={item?.name} width={100} />
                                    </div>
                                    <div>
                                        <h3>{item?.name}</h3>
                                        <p>Price: ₹ {item?.price}</p>
                                        <p>Color: {item?.color}</p>
                                        <p>Brand: {item?.brand}</p>
                                    </div>
                                    <div>
                                        <button onClick={() => dispatch(removeFromCart(item?.id))}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='cart-container-2'>
                        <div className='price'>
                            <h1>Price Details</h1>
                            <div className='price-detail'>
                                <div>
                                    <p>Base Price</p>
                                    <p>Gst.</p>
                                    <p>Discount</p>
                                    <h4>Sub Total</h4>
                                </div>
                                <div>
                                    <p>₹ {amount}</p>
                                    <p>₹ +{gst}</p>
                                    <p>₹ -{discount}</p>
                                    <h4>₹ {amount + gst - discount}</h4>
                                </div>
                            </div>
                            <div>
                                <button className='checkout'>Checkout to Pay</button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='emptyCart'>
                    <img src='https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png' alt='empty' className='empty' />
                </div>
            )}
        </div>
    )
}

export default Cart