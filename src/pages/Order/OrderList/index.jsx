import {useFetch} from '@/customHooks/useFetch'
import ProductTable from '@/components/Product/ProductTable'
import { Button, Row, Col } from 'antd'
import './OrderList.scss'
import { useNavigate } from 'react-router-dom'
export default function OrderList(){
    const nav = useNavigate()
    const {data} = useFetch('/my-orders')    
    const listOrderDataSource = data?.map(order=>{
        let dataSource = order?.attributes?.items?.map(item=>{
            let product = item?.product?.data
            return {
                ...product,
                product: item?.id,
                key: item?.id,
                quantity: item?.quantity,
                price: item?.price,
                totalPrice: item?.totalPrice
            }
        })
        return {
            id: order?.id,
            dataSource
        }
    })
    
    return (
        <>
            <h1>Danh sách đơn hàng</h1>
            
            <Row>
                {listOrderDataSource?.map(({id, dataSource})=>{
                    return (
                        <Col key={id} span={24} className="order-row">
                            <ProductTable 
                                dataSource={dataSource}
                                options={{
                                    edit: false,
                                    buttonCTA: <Button danger type='primary' onClick={()=>{
                                        nav(`/don-hang/${id}`)
                                    }}>Xem đơn {id}</Button>
                                }}
                            />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}