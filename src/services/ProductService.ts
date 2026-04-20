import { supabase } from "./supabaseClient";
import type { ProductWithUser } from "../types/Product";

export const fetchProductsWithLikes = async (): Promise<ProductWithUser[]> => {
  // 1️⃣ produits + user
  const { data: productsData, error: productsError } = await supabase
    .from("products")
    .select(`*, user:users!user_id(name)`);

  if (productsError) {
    throw new Error(productsError.message);
  }

  // 2️⃣ likes
  const { data: likesData, error: likesError } = await supabase
    .from("likes")
    .select("product_id");

  if (likesError) {
    throw new Error(likesError.message);
  }

  // 3️⃣ compter les likes
  const likesCount: Record<string, number> = {};

  likesData?.forEach((like) => {
    likesCount[like.product_id] = (likesCount[like.product_id] || 0) + 1;
  });

  // 4️⃣ fusion
  const merged = (productsData || []).map((product) => ({
    ...product,
    likesCount: likesCount[product.id] || 0,
  }));

  return merged;
};
