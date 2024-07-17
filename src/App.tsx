import { useState } from "react"
import { Product } from "./interfaces/product";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  const addProduct = (product: Product): void => {

    setProducts([...products,product]);

  };
  const removeProduct = (id: number): void => {

    setProducts(products.filter(p => p.id !== id));

  };
  const toggleEdit = (id: number): void => {

    const productToEdit = products.find(p => p.id === id)!;
    const editedProduct = {...productToEdit, edit : !productToEdit.edit};
    setProducts(products.map(p => p.id !== id ? p: editedProduct));

  };
  const saveEditedProduct = (product: Product): void => {

    setProducts(products.map(p => p.id !== product.id ? p: product));
    
  };
  

  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <ProductList
        products={products}
        removeProduct={removeProduct}
        toggleEdit={toggleEdit}
        saveEditedProduct={saveEditedProduct}
      />
    </div>
  )
}

export default App
