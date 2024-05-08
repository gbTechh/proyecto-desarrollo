import { useStore } from "@nanostores/react";
import { isCartOpen, addCartItem } from "../../stores/cartStore";


interface Props {
  data: {
    id: number,
    href: string;
    title: string;
    ingredients: string[];
    cost: number;
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
      className="group-hover:bg-white group-hover:text-yellow-400 text-white font-bold bg-primary h-8 w-8 rounded-md"
    >
      +
    </button>
  );
}
