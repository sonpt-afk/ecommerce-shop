import { StatusCodes } from 'http-status-codes'


//xem tat ca san pham
const getAll = async (req, res, next) => {
  try {
  }
  catch (error) {
    next(error)
  }
}
//them san pham moi
const createItem = async (req, res, next) => {
  try {
    

    // Có kết quả thì trả về phía client
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(error)
  }
}

//them vao gio hang
const addToCart = async (req, res, next) => {
  try {
   

    // Có kết quả thì trả về phía client
    res.status(StatusCodes.CREATED).json(createdBoard)
  } catch (error) {
    next(error)
  }
}

//xem gio hang
const getCart = async (req, res, next) => {

}
//xem chi tiet san pham
const getDetail = async (req, res, next) => {
  try {
    
  } catch (error) {
    next(error)
  }
}

//cap nhat info san pham
const updateItem = async (req, res, next) => {
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
    createItem,
  getDetail,
  updateItem,
  deleteItem,
  getAll,
  addToCart,
  getCart,
}