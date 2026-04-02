import type { Product } from "../../../types/Product";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex border p-2 mb-2 rounded w-100 md:w-87.5">
      <div className="w-2/5 border border-r-amber-200">image</div>
      <div className="w-3/5">
        <p className="font-semibold">{product.title}</p>
        <p>Culture: {product.culture}</p>
        <p>Hectares: {product.hectare ?? "Non précicé"}</p>
        <p>Lieu: {product.location}</p>
        <p>Récolte: {product.harvest_date}</p>
      </div>
    </div>
  );
};

export default ProductCard;
