import './Home.css'
import ProductList from '@/components/Product/ProductList'
export default function Home(){
    return (
        <>  
            <ProductList />
            <ProductList query="filters[idCategories][slug]=laptop-gaming"/>
        </>
    )
}