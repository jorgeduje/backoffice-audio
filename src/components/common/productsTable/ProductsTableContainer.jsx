import axios from "axios";
import ProductsTable from "./ProductsTable";
import { useEffect, useState } from "react";
import Loading from '../loading/Loading'
const ProductsTableContainer = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
    .get("http://localhost:5000/products")
    .then((res) => {
      setProducts(res.data);
    })
    .catch((error)=>{
      console.log(error)
    })
    // console.log(products)
  }, [products]);

  if(!products){
    return <Loading />
  }

  return <ProductsTable products={products}/>;
};

export default ProductsTableContainer;
