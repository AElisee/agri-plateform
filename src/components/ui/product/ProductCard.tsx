import { Link } from "react-router-dom";
import type { ProductWithUser } from "../../../types/Product";
import FavoriteIcon from "@mui/icons-material/Favorite";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { formatDate } from "../../../utils/formatDate";
type Props = {
  product: ProductWithUser;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className="flex flex-col border border-emerald-200 p-2 mb-2 rounded w-100 md:w-87.5 gap-3 shadow-md hover:bg-slate-50">
      {/* TOP */}
      <div className="flex gap-3">
        <div className="w-2/5">image</div>

        <div className="w-3/5 font-semibold">
          <p className="font-semibold text-orange-700">{product.title}</p>

          <p>
            <span className="font-semibold text-zinc-500">Culture:</span>{" "}
            {product.culture}
          </p>

          <p>
            <span className="font-semibold text-zinc-500">Hectares:</span>{" "}
            {product.hectare ?? "Non précisé"}
          </p>

          <p>
            <span className="font-semibold text-zinc-500">Lieu:</span>{" "}
            {product.location}
          </p>

          <p>
            <span className="font-semibold text-zinc-500">
              Entrée en production:
            </span>{" "}
            {formatDate(product.havert_date)}
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div>
        <div className="px-3 flex justify-center items-center bg-green-200 font-semibold rounded-md">
          <span className="text-zinc-500 px-2">Cultivateur:</span>
          {product.user?.name ?? "Inconnu"}
        </div>

        <div className="px-3 py-2 flex justify-between items-center">
          <div className="flex items-center font-medium">
            <FavoriteIcon className="text-red-500 px-0.5" />{" "}
            {product.likesCount ?? 0}
          </div>

          <div>
            <Link
              to={`/product/${product.id}`}
              className="font-semibold text-gray-600 hover:text-green-500"
            >
              Plus de détails...{" "}
              <KeyboardDoubleArrowRightIcon
                className="text-green-600"
                fontSize="small"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
