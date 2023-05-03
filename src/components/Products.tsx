import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../models/cart/cartSlice'
import { HiOutlineShoppingCart } from 'react-icons/hi'

export interface Product {
  name: string,
  price: number,
  id: number,
  quantity: number
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([
    {name: 'shoe', price: 500, id: 1, quantity: 0},
    {name: 'dress', price: 1000, id: 2, quantity: 0},
    {name: 'hat', price: 300, id: 3, quantity: 0},
    {name: 'watch', price: 2000, id: 4, quantity: 0},
    {name: 'tshirt', price: 100, id: 5, quantity: 0},
])

const dispatch = useDispatch()

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