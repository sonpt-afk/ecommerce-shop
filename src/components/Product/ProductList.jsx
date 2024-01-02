import {
    Card,
    Row, Col,
    Pagination,
    Skeleton
} from 'antd'
import {useFetch} from '@/customHooks/useFetch'
import './ProductList.scss'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const { Meta } = Card;

export default function ProductList(props){
    const {data, paging, setPaging, loading} = useFetch('/products', props.query)

    let loadingElement = <Row gutter={[15, 15]} justify="space-between">
        <Row gutter={[0, 15]} className="skeleton-container">
            <Col span={24}><Skeleton.Image active/></Col>
            <Col span={24}><Skeleton.Input active/></Col>
            <Col span={24}><Skeleton title active/></Col>
        </Row>
        <Row gutter={[0, 15]} className="skeleton-container">
            <Col span={24}><Skeleton.Image active/></Col>
            <Col span={24}><Skeleton.Input active/></Col>
            <Col span={24}><Skeleton title active/></Col>
        </Row>
        <Row gutter={[0, 15]} className="skeleton-container">
            <Col span={24}><Skeleton.Image active/></Col>
            <Col span={24}><Skeleton.Input active/></Col>
            <Col span={24}><Skeleton title active/></Col>
        </Row>
        <Row gutter={[0, 15]} className="skeleton-container">
            <Col span={24}><Skeleton.Image active/></Col>
            <Col span={24}><Skeleton.Input active/></Col>
            <Col span={24}><Skeleton title active/></Col>
        </Row>
    </Row>

    
    if(loading){
        return loadingElement
    }else{
        return (<>
            <Row gutter={[0, 30]}>
                {data.map(item=>{
                    let imgUrl = item?.attributes?.image?.data[0]?.attributes?.url ? import.meta.env.VITE_BASE_API_URL + item?.attributes?.image?.data[0]?.attributes?.url : ''
                    return (
                        <Col key={item?.id} md={6} sm={24} className="product">
                            <Card 
                                key={item?.id}
                                hoverable
                                cover={<LazyLoadImage src={imgUrl}/>}
                            >
                                <Meta title={item?.attributes?.name} description={item?.attributes?.description?.substring(0, 30)} />
                            </Card>
                        </Col>
                    )
                })}
            </Row>
            <Pagination 
                total={paging.total} 
                current={paging.page} 
                pageSize={paging.pageSize}
                onChange={(page)=>{
                    setPaging({
                        ...paging,
                        page: page
                    })
                }}
            ></Pagination>
        </>)
    }
}