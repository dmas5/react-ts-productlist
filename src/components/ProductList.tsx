import { ProductListProps } from "../interfaces/myprops";
import Product from "./Product";
import ProductEdit from "./ProductEdit";

const ProductList = ({products, removeProduct, toggleEdit,saveEditedProduct}: ProductListProps) => {
    return (
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Amount</th>
            <th>Price</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((p) => p.edit ?
                <ProductEdit
                    key={p.id}
                    product={p}
                    toggleEdit={toggleEdit}
                    saveEditedProduct={saveEditedProduct}
                /> :
                <Product
                    key={p.id}
                    product={p}
                    removeProduct={removeProduct}
                    toggleEdit={toggleEdit}
                />
                
            )
          }
        </tbody>
      </table>
    )
}

export default ProductList;