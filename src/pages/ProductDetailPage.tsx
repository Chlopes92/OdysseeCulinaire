import { PRODUCTS } from "mocks/products";
import {
    useParams,
    // useNavigate 
} from "react-router-dom";
import Carousel from "components/Carousel/Carousel";
import ProductItem from "components/ProductItem/ProductItem";
import style from './ProductsPage.module.css'
import { ProductCategoryType } from "mocks/products";



const ProductDetailPage = () =>{
    // If si pas category envoi page error 
    // const navigate = useNavigate();
    // navigate("/error");
    let { id } = useParams();
    let product_displayed = PRODUCTS.filter(product => product.category.includes(id ?? ''))
    return (
        <section>
            <Carousel />
        <ul className={style.menu}>
            {product_displayed.map((product) =>
                <li key={product.id}>
                    <ProductItem product={product} />
                </li>)}
        </ul>
        </section>
    )
}

export default ProductDetailPage;