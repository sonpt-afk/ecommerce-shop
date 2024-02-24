import { useDispatch, useSelector } from "react-redux"
import {useFetch} from '@/customHooks/useFetch'
import ProductTable from '@/components/Product/ProductTable'
import { Button, Row, Col, Form, Input } from "antd"
import { useEffect } from "react"
import { saveUserThunk } from "@/redux/auth/thunk"
import { addOrder } from '@/services/order'
import { useNavigate } from "react-router-dom"
import { clearCart } from '@/redux/cartSlice'
export default function Checkout(){
    const nav = useNavigate()
    const [form] = Form.useForm()
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.user)
    const productList = useSelector(state => state.cart.productList)
    let query = productList.reduce((txtQuery, item, index)=>{
        return txtQuery + `filters[id][$in][${index}]=${item?.id}&`
    }, '')
    let {data} = useFetch(`/products`, query)
    if(!productList?.length){
        data = []
    }
    let dataSource = data?.map(item=>{
        let productFinded = productList.find(product=> product?.id === item?.id)
        let quantity = 0
        if(productFinded){
            quantity = productFinded.quantity
        }
        let price = Number(item?.attributes?.price)
        return {
            ...item,
            product: item?.id,
            key: item?.id,
            quantity: quantity,
            price: price,
            totalPrice: price * quantity
        }
    })

    useEffect(()=>{
        form.setFieldsValue({
            address: user?.address,
            phone: user?.phone,
            customerName: user?.name
        })
    }, [user?.address, user?.phone, user?.name])
    const onOrder = async (values)=>{
       try {
            let contact = {
                idUser: user?.id,
                address: values?.address,
                customerName: values?.customerName,
                phone: values?.phone
            }
            let totalOrderPrice = dataSource?.reduce((total, item)=>{
                return total + Number(item?.attributes?.price) * item?.quantity 
            }, 0)

            await addOrder(contact, totalOrderPrice, dataSource)
            dispatch(clearCart())
            nav('/')
       } catch (error) {
            alert('Khong the tao Order')
       }
    }
    const saveInfo = async ()=>{
        let newInfo = form.getFieldsValue()
        newInfo.name = newInfo.customerName ? newInfo.customerName : newInfo.name
        dispatch(saveUserThunk(newInfo))
    }
    return (
        <>  
            <Row>
                <Col span={24}><h2>Địa chỉ</h2></Col>
                <Col span={24}>
                    <h3>Tài khoản: {user?.username}</h3>
                </Col>
                <Col span={24}>
                    <Form form={form} onFinish={onOrder}>
                        <Form.Item name="customerName" label="Tên người nhận">
                            <Input></Input>
                        </Form.Item>
                        <Form.Item name="phone" label="Điện thoại">
                            <Input></Input>
                        </Form.Item>
                        <Form.Item name="address" label="Địa chỉ">
                            <Input></Input>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={24}>
                    <h3>Lưu thông tin mua hàng cho lần sau</h3>
                    <Button onClick={saveInfo}>Lưu</Button>
                </Col>
            </Row>
            <ProductTable dataSource={dataSource} options={{
                edit: false,
                buttonCTA: <Button onClick={()=>{
                    form.submit()
                }}>Đặt hàng</Button>
            }}></ProductTable>
        </>
    )
}