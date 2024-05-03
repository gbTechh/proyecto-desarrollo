import { useStore } from "@nanostores/react";
import { isCartOpen, cartItems } from "../stores/cartStore";
import Text from "./ui/Text";
import Spacer from "./ui/Spacer";

export default function CartAside() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  return $isCartOpen ? (
    <div className="bg-black bg-opacity-10 flex justify-end w-full h-full fixed top-0 z-50 left-0">
      <aside className="bg-whitebg h-full  w-full max-w-[300px] rounded-tl-3xl rounded-bl-3xl shadow-2xl p-6   ">
        <div className="flex justify-between items-center">
          <Text>Mi carrito</Text>
          <button onClick={() => isCartOpen.set(false)}>x</button>
        </div>
        <Spacer y={4} />
        <div className="bg-gray-200 w-full h-[1px] rounded-full"></div>
        <Spacer y={6} />
        {Object.values($cartItems).length ? (
          <ul className="flex flex-col gap-2">
            {Object.values($cartItems).map((cartItem) => (
              <li key={cartItem.id} className="rounded-xl p-2 border-[1px] border-primary flex justify-between items-center gap-2">
                <img className="w-10 shadow-md aspect-square rounded-full" src={cartItem.image} alt={cartItem.title} />
                <Text size="xs" className="flex items-center font-bold">{cartItem.quantity}</Text>
                <span className="text-green-500 font-biryani">x</span>
                <Text size="xs" className="w-full font-semibold truncate text-ellipsis">{cartItem.title}</Text>
                <Text size="xs" color="warning" className="w-full font-bold text-right">{cartItem.cost}</Text>
              </li>
            ))}
          </ul>
        ) : (
          <p>¡Tu carrito está vacío!</p>
        )}
      </aside>
    </div>
  ) : null;
}
