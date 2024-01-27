import { useDispatch, useSelector } from "react-redux"
import { setQuantityProduct, removeProduct } from '@/redux/cartSlice'
import {useFetch} from '@/customHooks/useFetch'
import {Table, InputNumber, Row, Col, Button} from 'antd'
import {DeleteOutlined} from '@ant-design/icons'
import { Link } from "react-router-dom"
import './Cart.scss'
import { convertToCurrency } from "@/common/currencyHelper"
export default function Cart(){
    const dispatch = useDispatch()
    const productList = useSelector(state => state.cart.productList)
    let query = productList.reduce((txtQuery, item, index)=>{
        return txtQuery + `filters[id][$in][${index}]=${item?.id}&`
    }, '')
    
    let {data} = productList.length && useFetch(`/products`, query)
    let dataSource = data?.map(item=>{
        let productFinded = productList.find(product=> product?.id === item?.id)
        let quantity = 0
        if(productFinded){
            quantity = productFinded.quantity
        }

        return {
            ...item,
            key: item?.id,
            quantity: quantity
        }
    })
    function handleRemoveItem(id){
        dispatch(removeProduct(id))
    }
    const columns = [
        {
          title: 'Tên SP',
          render: (item) => {
            let imgProduct = item?.attributes?.image?.data[0]?.attributes?.formats?.thumbnail?.url
            imgProduct = imgProduct ? import.meta.env.VITE_BASE_API_URL + imgProduct : ''
            let max = item?.attributes?.quantityAvailable
            return (
                <div className="info">
                    <Link to={`/sanpham/${item?.attributes?.slug}`}><img className="thumbnail" src={imgProduct} alt={item?.attributes?.name} /></Link>
                    <div>
                        <Link to={`/sanpham/${item?.attributes?.slug}`}>
                            <h3>{item?.attributes?.name}</h3>
                        </Link>
                        <div className="show-on-mobile">
                            <div>
                                <span className="old-price">{convertToCurrency(item?.attributes?.oldPrice)}</span> - <span className="price">{convertToCurrency(item?.attributes?.price)}</span>
                            </div>
                            <InputNumber
                            defaultValue={item?.quantity}
                            min={1}
                            max={max}
                            onChange={(value)=>{
                                dispatch(setQuantityProduct({
                                    id: item?.id,
                                    quantity: value,
                                    quantityAvailable: max
                                }))
                            }}
                            ></InputNumber>
                            <p>Còn: {max}</p>
                            <p className="money">{convertToCurrency(item.quantity * item?.attributes?.price)}</p>
                            <DeleteOutlined onClick={()=>{
                                handleRemoveItem(item?.id)
                            }}/>
                        </div>
                    </div>
                </div>
            )
          }
        },
        {
          title: 'Giá',
          dataIndex: 'attributes',
          responsive: ['md'],
          render: item => (
            <div>
                <span className="old-price">{convertToCurrency(item.oldPrice)}</span> - <span className="price">{convertToCurrency(item.price)}</span>
            </div>
          )
        },
        {
            title: 'Số lượng',
            responsive: ['md'],
            render: item => {
                let max = item?.attributes?.quantityAvailable
                return (
                    <Row gutter={[0, 10]}>
                        <Col span={24}>
                            <InputNumber
                            defaultValue={item?.quantity}
                            min={1}
                            max={max}
                            onChange={(value)=>{
                                dispatch(setQuantityProduct({
                                    id: item?.id,
                                    quantity: value,
                                    quantityAvailable: max
                                }))
                            }}
                            />
                        </Col>
                        <Col span={24}><span>Còn: {max}</span></Col>
                    </Row>
                )
            }
        },{
            title: 'Thành tiền',
            responsive: ['md'],
            render: item => <p className="money">{convertToCurrency(item.quantity * item?.attributes?.price)}</p>
        },
        {
            title: 'Xoá',
            responsive: ['md'],
            render: item => <DeleteOutlined onClick={()=>{
                handleRemoveItem(item?.id)
            }}>
            </DeleteOutlined>
        }
    ];
  
    return (
        <>  
            {
                data ? (
                    <Table 
                        className="cart-table"
                        rowClassName="product"
                        pagination={false}
                        dataSource={dataSource} columns={columns}
                    ></Table> 
                ) : (
                    <Row justify={"center"} align={'middle'}>
                        <h3 style={{padding: 10}}>Chưa có sản phẩm nào</h3>
                        <Link to="/">Quay về trang chủ</Link>
                    </Row>
                )
            }
            <Row className="sumary" justify={'end'} align={'middle'}>
                <Col><Button>Thanh toan</Button></Col>
                <Col><h3 className="money">{convertToCurrency(dataSource?.reduce((total, item)=>{
                    return total + Number(item?.attributes?.price) * item?.quantity 
                }, 0))}</h3></Col>
            </Row>
        </>
    )
}