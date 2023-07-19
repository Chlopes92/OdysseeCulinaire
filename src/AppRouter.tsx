import App from "App"
import Cart from "pages/Cart"
import Error from "pages/Error"
import Home from "pages/Home"
import Order from "pages/Order"
import Payment from "pages/Payment"
import ProductDetail from "pages/ProductDetails"
import Products from "pages/Products"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const AppRouter = () => {
    const router =createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Error />,
            children:[
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/products",
                    element: <Products />,
                },
                {
                    path: "/product/:id",
                    element: <ProductDetail />,
                },
                {
                    path:"/cart",
                    element: <Cart />
                },
                {
                    path: "/payment",
                    element: <Payment />,
                },
                {
                    path: "/order",
                    element: <Order />,
                }
            ]
        }
    ])
    return (<RouterProvider router={router}/>)
}

export default AppRouter;