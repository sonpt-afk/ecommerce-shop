import ProductList from '@/components/Product/ProductList'
import { useParams, useSearchParams } from 'react-router-dom'
import {
    Form,
    Input,
    Button,
    Layout,
    Select,
    Checkbox
} from 'antd'
import { useEffect, useState } from 'react'
const { Sider, Content } = Layout
const CheckboxGroup = Checkbox.Group
export default function Category(){
    const params = useParams()
    const [brandCheckList, setBrandCheckList] = useState([])
    const [sortPrice, setSortPrice] = useState("asc")
    const [query, setQuery] = useSearchParams()
    function getQueryToObject(){
        let result = {}
        query.forEach((value, key)=>{
            result[key] = value
        })

        return result
    }
    useEffect(()=>{
        let queryObj = getQueryToObject()
        let defaultSort = queryObj.sort ? queryObj?.sort : "asc"
        let defaultBrand = queryObj.brand ? queryObj?.brand?.split(',') : []
        setBrandCheckList(defaultBrand)
        setSortPrice(defaultSort)
    }, [])
    
    const handleBrandChange = (values)=>{
        setBrandCheckList(values)
        let queryObj = getQueryToObject()
        queryObj.brand = values.join(',')
        setQuery(queryObj)
    }
    
    const handleSortPricechange = (value)=>{
        setSortPrice(value)
        let queryObj = getQueryToObject()
        queryObj.sort = value
        setQuery(queryObj)
    }
    let queryFilterTxt = `filters[idCategories][slug]=${params.category}`
    if(sortPrice){
        queryFilterTxt += `&sort[1]=price:${sortPrice}`
    }

    if(brandCheckList.length >= 0){
        brandCheckList.forEach((value, index)=>{
            queryFilterTxt += `&filters[idBrand][name][$in][${index}]=${value}`
        })
    }
    return (
        <>
            <Layout>
                <Sider style={{background: 'white'}}>
                    <h1>Lọc theo Hãng</h1>
                    <CheckboxGroup options={['asus', 'acer', 'dell']} value={brandCheckList} onChange={handleBrandChange}/>
                    <h1>Sắp xếp</h1>
                    <Select
                        value={sortPrice}
                        onChange={handleSortPricechange}
                        options={[{
                            label: 'Giá tăng dần',
                            value: 'asc'
                        }, {
                            label: 'Giá giảm dần',
                            value: 'desc'
                        }]}
                    ></Select>
                </Sider>
                <Content>
                    <Form
                        name="price-form"
                    >
                        <Form.Item
                            label="Gia thấp nhất"
                            name="minPrice"
                        ><Input/>
                        </Form.Item>
                        <Form.Item
                            label="Gia cao nhất"
                            name="maxPrice"
                        ><Input/>
                        </Form.Item>
                        <Button>Lọc</Button>
                    </Form>

                    <ProductList query={queryFilterTxt}/>
                </Content>
            </Layout>
            
        </>
    )
}