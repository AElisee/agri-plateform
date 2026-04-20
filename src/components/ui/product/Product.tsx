import { useEffect, useState } from "react";
import type { Product, ProductWithUser } from "../../../types/Product";
import ProductCard from "./ProductCard";
import { fetchProductsWithLikes } from "../../../services/ProductService";

const Product = () => {
  const [products, setProducts] = useState<ProductWithUser[]>([]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProductsWithLikes();
        setProducts(data);
      } catch (error) {
        console.error("Erreur:", error);
      }
    };

    loadProducts();
  }, []);
  return (
    <div className="w-full md:p-5 p-2 flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl font-medium text-[#00d571]">
          Les produits disponibles chez les cultivateurs en ce moments:
        </h2>
        <div className="flex gap-5 flex-wrap   justify-center">
          {products.length === 0 ? (
            <p>Pas de produit en vente</p>
          ) : (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
