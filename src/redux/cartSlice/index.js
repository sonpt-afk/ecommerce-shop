import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  productList: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
        // {id: , quantity: , quantityAvailable}
        const {id, quantity, quantityAvailable} = action.payload
        let selectedItem = state.productList.find(item=>{
            return item.id == id
        })

        if(selectedItem){
            //tang so luong
            let newQuantity = selectedItem.quantity + quantity
            selectedItem.quantity = newQuantity <= quantityAvailable ? newQuantity : quantityAvailable
        }else{
            // them moi
            state.productList.push(action.payload)
        }
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { addProduct } = cartSlice.actions

export default cartSlice.reducer