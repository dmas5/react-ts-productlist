import { Product } from "./product";

export interface ProductFormProps {
    addProduct: (product: Product) => void;
}
export interface ProductListProps {
    products: Product[],
    removeProduct: (id: number) => void,
    toggleEdit: (id: number) => void,
    saveEditedProduct: (product: Product) => void
}
export interface ProductProps {
    product: Product,
    removeProduct: (id: number) => void,
    toggleEdit: (id: number) => void
}
export interface ProductEditProps {
    product: Product,
    toggleEdit: (id: number) => void,
    saveEditedProduct: (product: Product) => void

}