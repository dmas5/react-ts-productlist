import { ProductProps } from "../interfaces/myprops";

const Product = ({product,removeProduct,toggleEdit}: ProductProps) => {

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.amount}</td>
            <td>{product.price}</td>
            <td><button onClick={() => toggleEdit(product.id)}>edit</button></td>
            <td><button onClick={() => removeProduct(product.id)}>remove</button></td>
        </tr>

    )
}

export default Product;