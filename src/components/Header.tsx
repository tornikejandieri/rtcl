import React from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/store'


const Header = () => {

  const cart = useSelector((state: RootState) => state.cart.items)
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <div style={{marginBottom: 100}}>
      <div className='cart-length'>{totalQuantity}</div>
      <Link to='/cart'>
        <HiOutlineShoppingCart size={50} color="black" />
      </Link>
    </div>
  )
}

export default Header