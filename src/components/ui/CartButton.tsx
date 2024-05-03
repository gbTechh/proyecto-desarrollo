import { useStore } from "@nanostores/react";
import { isCartOpen } from "../../stores/cartStore";
import Food from "../icons/food";
import Text from "./Text";




export default function CartButton() {
  const $isCartOpen = useStore(isCartOpen);
  
  
  return (
    <button
      className="bg-customblack p-2 px-4 rounded-lg flex justify-between items-center gap-2"
      onClick={() => isCartOpen.set(!$isCartOpen)}
    >
      <Food w={20} h={20} cls="aspect-square" />
      <Text size="sm" color="custom" className="text-white1">
        Mi carrito
      </Text>
    </button>
  );
}