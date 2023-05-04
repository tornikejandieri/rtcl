import { addToCart } from '../models/cart/cartSlice'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { useAppDispatch } from '../hooks'
import { products } from '../data'
import React from 'react'

export interface Product {
  name: string,
  price: number,
  id: number,
  quantity: number
}

const Products = () => {
const dispatch = useAppDispatch()

  return (
    <div>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          {
            products.map((i: Product) => (
              <div key={i.id} style={{marginRight: 15}}>
                <div>{i.name}</div>
                <div>
                  <p>aq wesit foto unda iyos magram mezareba</p>
                </div>
                <p>{`$ ${i.price}`}</p>
                <button onClick={() => dispatch(addToCart(i))}>Add To <HiOutlineShoppingCart size={15} color="black" /></button>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Products