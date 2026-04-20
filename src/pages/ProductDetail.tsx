import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ProductWithUser } from "../types/Product";
import { supabase } from "../services/supabaseClient";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductWithUser | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // produit + user
        const { data: productData, error } = await supabase
          .from("products")
          .select(`*, user:users!user_id(name)`)
          .eq("id", id)
          .single();

        if (error) {
          console.error(error);
          return;
        }

        // likes
        const { data: likesData } = await supabase
          .from("likes")
          .select("id")
          .eq("product_id", id);

        setProduct({
          ...productData,
          likesCount: likesData?.length || 0,
        });
      } catch (error) {
        console.error(error);
      }
    };

    if (id) fetchProduct();
  }, [id]);

  if (!product) return <p>Chargement...</p>;

  return (
    <div>
      <div>{product.title}</div>
    </div>
  );
};

export default ProductDetail;
