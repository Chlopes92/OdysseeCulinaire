import App from "App"
import CartPage from "pages/CartPage"
import ErrorPage from "pages/ErrorPage"
import FormPage from "pages/FormPage"
import HomePage from "pages/HomePage"
import OrderPage from "pages/OrderPage"
import PaymentPage from "pages/PaymentPage"
import ProductCategoryPage from "pages/ProductCategoryPage"
import ProductDetailPage from "pages/ProductDetailPage"
import ProductsPage from "pages/ProductsPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const AppRouter = () => {
    const router =createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children:[
                {
                    index: true,
                    element: <HomePage />,
                },
                {
                    path: "/products",
                    element: <ProductsPage />,
                },
                {
                    path: "/products/:id",
                    element: <ProductDetailPage />,
                },
                {
                    path: "/products/category/:category",
                    element: <ProductCategoryPage />,
                },
                {
                    path:"/cart",
                    element: <CartPage />
                },
                {
                    path: "/payment",
                    element: <PaymentPage />,
                },
                {
                    path: "/form",
                    element: <FormPage />,
                },
                {
                    path: "/order",
                    element: <OrderPage />,
                }
            ]
        }
    ])
    return (<RouterProvider router={router}/>)
}

export default AppRouter;