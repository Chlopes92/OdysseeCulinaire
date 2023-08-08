import Carousel from "components/Carousel/Carousel";
import ProductItem from "components/ProductItem/ProductItem";
import { PRODUCTS } from "mocks/products";
import style from './ProductsPage.module.css'

const ProductsPage = () => {
    return (
        <section>
            <Carousel />
        <ul className={style.menu}>
            {PRODUCTS.map((product) =>
                <li key={product.id}>
                    <ProductItem product={product} />
                </li>)}
        </ul>
        </section>
    )
}

export default ProductsPage;