import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Product } from '../../components/Products'

export interface CartState {
  items: Product[]
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const itemIndex = state.items.findIndex((item) => item.id === product.id)
      if(itemIndex === -1){
        state.items.push({...product, quantity: 1})
      } else {
        state.items[itemIndex].quantity += 1
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload
      const itemIndex = state.items.findIndex((item) => item.id === product.id)
      if(itemIndex !== -1){
        const item = state.items[itemIndex]
        if(item.quantity > 1){
          state.items[itemIndex].quantity -= 1
        } else {
          state.items.splice(itemIndex, 1)
        }
      }
    },
  },
})

export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer