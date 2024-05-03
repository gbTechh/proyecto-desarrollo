import { useStore } from "@nanostores/react";
import { isCartOpen, addCartItem } from "../../stores/cartStore";


interface Props {
  data: {
    id: number,
    href: string;
    title: string;
    ingredients: string[];
    cost: string;
    image: string;   
  };
}



export default function AddCartButton({ data }: Props) {

  function addToCart() {
    isCartOpen.set(true);
    addCartItem(data);
  }

  return (
    <button
      onClick={addToCart}
      className="text-white font-bold bg-primary h-8 w-8 rounded-md"
    >
      +
    </button>
  );
}
