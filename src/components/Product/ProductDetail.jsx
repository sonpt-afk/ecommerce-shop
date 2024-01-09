import { useParams } from "react-router-dom"
import {useFetch} from '@/customHooks/useFetch'
import Markdown from 'react-markdown'

export default function ProductDetail(){
    const params = useParams()
    const {data, setData} = useFetch(`/products/${params.slug}`)
    let content = data?.attributes?.description?.replaceAll("](/uploads/", "](https://backoffice.nodemy.vn/uploads/")
    console.log(content);
    
    return (<>
        <h1>Detail {data?.attributes?.name}</h1>
        <div>
            <Markdown>
                {content}
            </Markdown>
        </div>
    </>)
}