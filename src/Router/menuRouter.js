import Products from "../components/pages/Products";
import Users from '../components/pages/Users'

export const menuRouter = [
    {
        id: 'products',
        path: '/products',
        Element: Products
    },
    {
        id: 'users',
        path: '/users',
        Element: Users
    },
]