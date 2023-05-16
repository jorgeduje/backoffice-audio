import ProductsTable from "./ProductsTable";
import Loading from "../loading/Loading";
import { useState } from "react";

const ProductsTableContainer = ({ products, deleteProductById, editProductModal }) => {
  const [openModal, setOpenModal] = useState(false);

  if (!products) {
    return <Loading />;
  }

  return (
    <ProductsTable
      products={products}
      deleteProductById={deleteProductById}
      openModal={openModal}
      setOpenModal={setOpenModal}
      editProductModal={editProductModal}
    />
  );
};

export default ProductsTableContainer;
