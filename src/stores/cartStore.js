import { atom, map } from 'nanostores'

export const isCartOpen = atom(false);


/**
* @typedef {Object} CartItem
* @property {string} id
* @property {string} title
* @property {string} image
* @property {string} href
* @property {number} cost
* @property {number} quantity
*/
/** @type {import('nanostores').MapStore<Record<string, CartItem>>} */
export const cartItems = map({});

export function addCartItem({ id, title, href, ingredients, cost, image }) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    })
  } else {
    cartItems.setKey(
      id,
      { id, title, href, ingredients, cost, image, quantity: 1 }
    );
  }
}
