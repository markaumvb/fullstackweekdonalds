import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useContext } from "react";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/formatCurrency";

import { CartContext, CartProduct } from "../context/cart";

interface CardItemProps {
  product: CartProduct;
}
const CartProductItem = ({ product }: CardItemProps) => {
  const { decreaseProduct, increaseProduct } = useContext(CartContext);
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="relative h-28 w-28 rounded-xl bg-gray-200">
          <Image src={product.imageUrl} alt={product.name} fill />
        </div>
        <div className="space-y-1">
          <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          <div className="flex items-center gap-1">
            <Button
              className="h-7 w-7 rounded-lg"
              variant="outline"
              onClick={() => decreaseProduct(product.id)}
            >
              <ChevronLeftIcon size={16} />
            </Button>
            <p className="w-7 gap-1 text-center text-xs">{product.quantity}</p>
            <Button
              className="h-7 w-7 rounded-lg"
              variant="destructive"
              onClick={() => increaseProduct(product.id)}
            >
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Button className="h-7 w-7 rounded-lg" variant="outline">
          <TrashIcon />
        </Button>
      </div>
    </div>
  );
};

export default CartProductItem;
