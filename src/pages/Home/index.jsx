import './Home.css'
import ProductBlock from '@/components/Product/ProductBlock'
export default function Home(){
    return (
        <>  
            <ProductBlock title="Sản phẩm mới" link="/danh-muc/san-pham-moi"/>
            <ProductBlock 
                title="Laptop Gaming" 
                query="filters[idCategories][slug]=laptop-gaming"
                link="/danh-muc/laptop-gaming"
            />
        </>
    )
}