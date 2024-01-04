import './Home.css'
import ProductBlock from '@/components/Product/ProductBlock'
export default function Home(){
    return (
        <>  
            <ProductBlock title="Sản phẩm mới" link="/"/>
            <ProductBlock 
                title="Laptop Gaming" 
                query="filters[idCategories][slug]=laptop-gaming"
                link="/danh-muc/laptop-gaming"
            />
        </>
    )
}