import { useSelector } from "react-redux"
import {useFetch} from '@/customHooks/useFetch'
export default function Cart(){
    const productList = useSelector(state => state.cart.productList)
    let query = productList.reduce((txtQuery, item, index)=>{
        return txtQuery + `filters[id][$in][${index}]=${item?.id}&`
    }, '')
    
    let {data} = productList.length && useFetch(`/products?${query}`)
    return (
        <>  
            {data ? data.map(item=>{
                return (
                    <h1 key={item?.id}> {item?.id} - {item?.attributes?.name}  </h1>
                )
            }) : null}
        </>
    )
}