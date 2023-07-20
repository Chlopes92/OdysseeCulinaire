import App from "App"
import CartPage from "pages/CartPage"
import ErrorPage from "pages/ErrorPage"
import HomePage from "pages/HomePage"
import OrderPage from "pages/OrderPage"
import PaymentPage from "pages/PaymentPage"
import ProductDetailPage from "pages/ProductDetailPage"
import ProductsPage from "pages/ProductsPage"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

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
                    path: "/product/:id",
                    element: <ProductDetailPage />,
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
                    path: "/order",
                    element: <OrderPage />,
                }
            ]
        }
    ])
    return (<RouterProvider router={router}/>)
}

export default AppRouter;