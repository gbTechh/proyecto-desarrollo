import * as React from "react";

interface Props {
  w?: number,
  h?: number,
  cls: string
}

const Food = ({w = 24, h = 24, cls}: Props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={w} height={h} className={cls}>
    <path
      fill="#79ccb8"
      d="M39.7.338c-1.135-.657-4.113-.909-7.131 4.652s.016 5.516-6.333 15.507l2.672 1.549c5.51-10.479 6.979-7.824 10.3-13.207S40.834 1 39.7.338Z"
    />
    <path fill="#f1bb6b" d="M36.739 20.309a18.115 18.115 0 0 0-25.636 0Z" />
    <path fill="#79ccb8" d="M2.242 24.8a21.679 21.679 0 0 0 43.358 0Z" />
    <path
      fill="#3daa9d"
      d="M45.6 24.8H2.242A2.25 2.25 0 0 1 0 22.552a2.249 2.249 0 0 1 2.242-2.242H45.6a2.25 2.25 0 0 1 2.243 2.242A2.25 2.25 0 0 1 45.6 24.8ZM12.708 43.515h22.426V48H12.708z"
    />
  </svg>
);
export default Food;
