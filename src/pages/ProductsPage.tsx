import ProductItem from "components/ProductItem/ProductItem";
import { PRODUCTS } from "mocks/products";

const ProductsPage = () => {
    return (
        <ul>
            {PRODUCTS.map((product) =>
                <li key={product.id}>
                    <ProductItem product={product} />
                </li>)}
        </ul>
    )
}

export default ProductsPage;