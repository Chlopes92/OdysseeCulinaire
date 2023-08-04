import Carousel from "components/Carousel/Carousel";
import ProductItem from "components/ProductItem/ProductItem";
import { PRODUCTS } from "mocks/products";

const ProductsPage = () => {
    return (
        <section>
            <Carousel />
        <ul>
            {PRODUCTS.map((product) =>
                <li key={product.id}>
                    <ProductItem product={product} />
                </li>)}
        </ul>
        </section>
    )
}

export default ProductsPage;