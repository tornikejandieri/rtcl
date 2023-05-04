import { HiOutlineShoppingCart } from "react-icons/hi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { useMemo } from "react";

const Header = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

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
