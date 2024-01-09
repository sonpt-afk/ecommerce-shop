import { useParams } from "react-router-dom"
import {useFetch} from '@/customHooks/useFetch'
import Markdown from 'react-markdown'
import {
    Layout, Row, Col
} from 'antd'
import ProductBlock from "./ProductBlock"

const {Content, Sider} = Layout

export default function ProductDetail(){
    const params = useParams()
    const {data, setData} = useFetch(`/products/${params.slug}`)
    let contentBody = data?.attributes?.description?.replaceAll("](/uploads/", "](https://backoffice.nodemy.vn/uploads/")
    let brand = data?.attributes?.idBrand?.data?.attributes?.name
    let categories = data?.attributes?.idCategories?.data
    let queryWithCategories = categories?.reduce((txt, item, index)=>{
        return txt + `&filters[idCategories][slug][$in][${index}]=${item?.attributes?.slug}`
    }, `filters[slug][$ne]=${params.slug}`)
    return (<>
        <Row gutter={[60, 20]}>
            <Col xs={24} md={18}>
                <h1>Detail {data?.attributes?.name}</h1>
                <Markdown>
                    {contentBody}
                </Markdown>
                <ProductBlock 
                    title='Sản phẩm liên quan' 
                    query={queryWithCategories}
                    pageSize={4}
                    showButton={false}
                />
            </Col>
            <Col xs={24} md={6} >
                {brand ? 
                    <ProductBlock 
                    query={`filters[idBrand][name]=${brand}&filters[slug][$ne]=${params.slug}`}
                    title="Sản phẩm cùng hãng" 
                    link="/danh-muc/san-pham-moi" 
                    showPagination={false} 
                    showButton={false} 
                    type="column" 
                    pageSize={4}
                    />
                    : 
                    'Khong co san pham nao cung'
                }
            </Col>
        </Row>
        
    </>)
}