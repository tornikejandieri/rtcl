import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useMemo } from "react";
import React from "react";
import { useAppSelector } from "../hooks";

const Header = () => {
  const cart = useAppSelector((state: RootState) => state.cart.items);
  const totalQuantity = useMemo(() => cart.reduce((acc, item) => acc + item.quantity, 0), [cart]);

  return (
    <div style={{ marginBottom: 100 }}>
      <div className="cart-length">{totalQuantity}</div>
      <Link to="/cart">
        <HiOutlineShoppingCart size={50} color="black" />
      </Link>
    </div>
  );
};

export default Header;
