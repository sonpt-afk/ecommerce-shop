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
    const [priceCondition, setPriceCondidtion] = useState({})
    const [query, setQuery] = useSearchParams()
    const [formPriceCondition] = Form.useForm()
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
        let defaultPriceCondition = {
            minPrice: queryObj.minPrice,
            maxPrice: queryObj.maxPrice
        }
        setBrandCheckList(defaultBrand)
        setSortPrice(defaultSort)
        setPriceCondidtion(defaultPriceCondition)
        formPriceCondition.setFieldsValue(defaultPriceCondition)
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
    const handleMinMaxChange = (value)=>{
        let queryObj = getQueryToObject()
        if(value.minPrice){
            queryObj.minPrice = value.minPrice 
        }else{
            delete queryObj.minPrice
        }
        if(value.maxPrice){
            queryObj.maxPrice = value.maxPrice
        }else{
            delete queryObj.maxPrice
        }
        setPriceCondidtion(value)
        setQuery(queryObj)
    }
    const handleResetFilter = ()=>{
        setPriceCondidtion({})
        setBrandCheckList([])
        setSortPrice('asc')
        setQuery({})
        formPriceCondition.resetFields()
    }
    let queryFilterTxt = `filters[idCategories][slug]=${params.category}`
    if(priceCondition.minPrice){
        queryFilterTxt += `&filters[price][$gte]=${priceCondition.minPrice}`
    }
    if(priceCondition.maxPrice){
        queryFilterTxt += `&filters[price][$lte]=${priceCondition.maxPrice}`
    }
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
                <Sider style={{background: 'white', padding: '20px'}} width={350}>
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
                    <Form
                        name="price-form"
                        onFinish={handleMinMaxChange}
                        form={formPriceCondition}
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
                        <Button htmlType='submit'>Lọc</Button>
                    </Form>
                    <Button onClick={handleResetFilter}>Xoa Loc</Button>
                </Sider>
                <Content>
                    <ProductList query={queryFilterTxt}/>
                </Content>
            </Layout>
            
        </>
    )
}