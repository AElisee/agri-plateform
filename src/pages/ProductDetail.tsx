import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { ProductWithUser } from "../types/Product";
import { supabase } from "../services/supabaseClient";
import { formatDate } from "../utils/formatDate";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductWithUser | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // produit + user
        const { data: productData, error } = await supabase
          .from("products")
          .select(`*, user:users!user_id(*)`)
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

  console.log(product);

  if (!product) return <p>Chargement...</p>;

  return (
    <div className="w-full p-4">
      <div className="p-3  flex justify-center items-center bg-green-400 rounded-md">
        <h2 className="font-bold text-2xl">{product.title}</h2>
      </div>

      <div className="w-full flex flex-wrap gap-4  py-5 justify-center ">
        <div className="w-full md:w-[65%] flex gap-3  p-3 shadow-md border-t-2 border-t-green-500">
          <div className="w-full md:w-1/2">image</div>
          <div className="w-full md:w-1/2">
            <p>
              <span className="font-semibold text-zinc-500">Culture:</span>
              {product.culture}
            </p>
            <p>
              <span className="font-semibold text-zinc-500">Hectares:</span>
              {product.hectare ?? "Non précisé"}
            </p>
            <p>
              <span className="font-semibold text-zinc-500">
                Lieu de produition:
              </span>
              {product.location}
            </p>
            <p>
              <span className="font-semibold text-zinc-500">
                Entrée en production:
              </span>
              {formatDate(product.havert_date)}
            </p>
          </div>
        </div>
        <div className="w-full md:w-[33%] p-3 shadow-md border-t-2 border-t-amber-300 ">
          <p>
            <span className="font-semibold text-zinc-500 pr-2">
              Nom du Cultuvateur:
            </span>
            {product.user?.name}
          </p>
          <p>
            <span className="font-semibold text-zinc-500 pr-2">Téléphone:</span>
            {product.user?.contact}
          </p>
        </div>
      </div>
      <div>description</div>
      <div className=" w-full wrap gap-4 flex justify-center items-center">
        <a
          href={`https://wa.me/225${product.user?.contact}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-green-600 hover:bg-green-600 hover:text-white font-semibold p-3 border-3 border-green-600 rounded-md shadow-md"
        >
          <WhatsAppIcon />
          Contacter le cultuvateur sur WhatsApp
        </a>
        <div>
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
