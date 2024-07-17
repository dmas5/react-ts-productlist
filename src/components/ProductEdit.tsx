import { useState } from "react";
import { ProductEditProps } from "../interfaces/myprops";

const ProductEdit = ({product,toggleEdit,saveEditedProduct}: ProductEditProps) => {

    const [name,setName] = useState(product.name);
    const [amount,setAmount] = useState(product.amount);
    const [price, setPrice] = useState(product.price);

    const onSave = () => {

        const editedProduct = {
            id: product.id,
            name: name,
            amount: amount,
            price: price,
            edit: !product.edit
        };
        saveEditedProduct(editedProduct);
    };

    return (
    <tr>
      <td><input value={name} onChange={e => setName(e.target.value)} /></td>
      <td><input value={amount} onChange={e => setAmount(parseInt(e.target.value))} /></td>
      <td><input value={price} onChange={e => setPrice(parseInt(e.target.value))} /></td>
      <td><button onClick={onSave}>save</button></td>
      <td><button onClick={() => toggleEdit(product.id)}>cancel</button></td>
    </tr>
    )
}

export default ProductEdit;