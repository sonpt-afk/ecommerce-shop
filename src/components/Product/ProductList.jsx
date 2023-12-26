import {
    Card,
    Row, Col,
    Pagination
} from 'antd'
import {useFetch} from '@/customHooks/useFetch'
const { Meta } = Card;

export default function ProductList(props){
    const {data, setData, paging, setPaging, reload, reloadData} = useFetch('/products', props.query)

    return (<>
        <Row gutter={[50, 30]}>
            {data.map(item=>{
                let imgUrl = item?.attributes?.image?.data[0]?.attributes?.url ? import.meta.env.VITE_BASE_API_URL + item?.attributes?.image?.data[0]?.attributes?.url : ''
                return (
                    <Col span={6}>
                        <Card 
                            key={item?.id}
                            hoverable
                            cover={<img alt="example" src={imgUrl} />}
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