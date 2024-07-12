import { StatusCodes } from 'http-status-codes'
import Joi from 'joi'



//xem tat ca san pham
const getAll = async (req, res, next) => {
  try {
  }
  catch (error) {
    next(error)
  }
}


//them vao gio hang
const addToCart = async (req, res, next) => {
  const correctCondition = Joi.object({
    quantity: Joi.number().required().min().max(1000).trim().strict()
})

try{
  res.status(StatusCodes.CREATED).json({message: 'POST from validation: api create new board'})
}catch(error){
  console.log(error);
  res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
    errors: new Error(error).message
  })
}
}

//xem gio hang
const viewCart = async (req, res, next) => {

}

//xem chi tiet san pham
const viewDetailItem = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
}

//cap nhat info san pham
const updateDetailItem = async (req, res, next) => {
  try {
   
  } catch (error) {
    next(error)
  }
}

//xoa san pham
const deleteItem = async (req, res, next) => {
  try {
   
  } catch (error) {
    next(error)
  }
}



export const itemValidations = {
    viewDetailItem,
  updateDetailItem,
  deleteItem,
  getAll,
  addToCart,
  viewCart,
}