import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart} from '../redux/action'
import { productList } from '../redux/productAction'
import { useSelector } from 'react-redux'
const Home = () => {
    const dispatch = useDispatch()
    const data = useSelector(state=>state?.productData)
    useEffect(() => {
        dispatch(productList())
    }, [dispatch])
    
    return (
        <div>   
            <div className='product-container'>
              {data?.map((item)=>(
                <div className='product' key={item.id}>
                  <img src={item.image} alt={item.name} width={200} height={200}/>
                  <h3>{(item.name)}</h3>
                  <p>Price: ₹ {item.price}</p>
                  <p>Color: {item.color}</p>
                  <p>Brand: {item.brand}</p>
                  <button onClick={() => dispatch(addToCart(item))}>Add</button>      
                </div>
              ))}
            </div>
        </div>
    )
}

export default Home