import { useEffect, useState } from "react";
import type { Product } from "../../../types/Product";
import ProductCard from "./ProductCard";
import { supabase } from "../../../services/supabaseClient";

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from<Product>("products")
          .select("*");
        // .eq("is_visible", true); // récupère uniquement les produits visibles

        if (error) {
          console.error("Erreur:", error);
        } else {
          setProducts(data || []);
          console.log("Produits récupérés:", data);
        }
      } catch (error) {
        console.error("Oups:", error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <div className="w-full md:p-5 p-2 flex flex-col items-center justify-center ">
      <div className="w-full flex flex-col items-center justify-center gap-10">
        <h2 className="text-3xl font-medium text-[#00d571]">
          Les produits disponibles chez les cultivateurs en ce moments:
        </h2>
        <div className="flex gap-5 flex-wrap   justify-center">
          {products.length === 0 ? (
            <p>Pas de produit en vent</p>
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
