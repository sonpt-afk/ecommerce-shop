import ProductList from './ProductList'
import './ProductBlock.scss'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
export default function ProductBlock(props){
    const nav = useNavigate()
    return (<>
        <div className="block-title">
            <h1>{props.title}</h1>
            <Button danger
                onClick={()=>{
                    nav(props.link)
                }}
            >Xem tất cả</Button>
        </div>
        <ProductList query={props.query}/>
    </>)
}