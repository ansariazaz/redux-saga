import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/productAction'
const Header = () => {
    const data = useSelector(state => state.cartData)
    const dispatch = useDispatch()
    const [query, setQuery] = useState("")
    useEffect(() => {
        dispatch(searchProduct(query))
    }, [query])

    return (
        <div className='header'>
            <div className="left">
                <Link to={"/"}><h1>SHOPSY</h1></Link>
                <div className="searchBox">
                    <input type="text" placeholder="Search Products" onChange={(e)=>setQuery(e.target.value) } className="search" />
                    <BsSearch />
                </div>
            </div>
            <Link to={"/cart"} className="right">
                <div className='cart'>
                    <AiOutlineShoppingCart size={30} className='icon' />
                    {data.length > 0 && <p className='num'>{data.length}</p>}
                </div>
            </Link>
        </div>
    )
}

export default Header