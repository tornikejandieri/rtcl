import React, { useMemo } from 'react'
import { Product } from './Products'
import { RootState } from '../redux/store'
import { removeFromCart } from '../models/cart/cartSlice'
import { useAppDispatch, useAppSelector } from '../hooks'

const Cart = () => {

  const cart = useAppSelector((state: RootState) => state.cart.items)
  const dispatch = useAppDispatch()

  const totalPrice = useMemo(() => cart.reduce((acc, item) => acc + (item.price * item.quantity), 0), [cart]) 

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