import React from 'react'
import { Product } from './Products'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { removeFromCart } from '../models/cart/cartSlice'

const Cart = () => {

  const cart = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0) 

  return (
    <div>
      {
        cart.map((i: Product) => (
          <div key={i.id}>
            <div>{i.name}</div>
            <div>{`$ ${i.price}`}</div>
            <div>{`Quantity: ${i.quantity}`}</div>
            <button onClick={() => dispatch(removeFromCart(i))}>Delete</button>
          </div>
        ))
      }
      <div>
        <h5>Total</h5>
        <p>{`$ ${totalPrice}`}</p>
      </div>
    </div>
  )
}

export default Cart