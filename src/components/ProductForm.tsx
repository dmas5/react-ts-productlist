import { useState } from "react";
import { generateId } from "../services/idgenerator";
import { ProductFormProps } from "../interfaces/myprops";

const ProductForm = ({addProduct}: ProductFormProps) => {

    const [product, setProduct] = useState({
        id: 0,
        name: '',
        amount: 0,
        price: 0,
        edit: ''
      });
    
      const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

        setProduct({...product, [event.target.name]: event.target.value});

      };

      const add = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const newProduct = {...product, id: generateId(), edit: false };
        addProduct(newProduct);
        
      };


    return (
        <form onSubmit={add}>
            <label>Name: </label>
            <input value={product.name} name="name" onChange={handleChange} />
            <label>Amount: </label>
            <input value={product.amount} name="amount" onChange={handleChange} />
            <label>Price: </label>
            <input value={product.price} name="price" onChange={handleChange} />
            <button type='submit'>add</button>
        </form>

    )
}
export default ProductForm;