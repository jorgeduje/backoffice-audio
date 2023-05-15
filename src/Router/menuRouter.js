import Users from '../components/pages/Users'
import HomeContainer from "../components/pages/home/HomeContainer";
import ProductsContainer from "../components/pages/products/ProductsContainer";

export const menuRouter = [
    {
        id: 'home',
        path: '/',
        Element: HomeContainer
    },
    {
        id: 'products',
        path: '/products',
        Element: ProductsContainer
    },
    {
        id: 'users',
        path: '/users',
        Element: Users
    },
]