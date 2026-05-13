import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import useCart from "./hooks/UseCart";

export default function App() {
  const { cartCount } = useCart();

  return (
    <>
      <NavBar cartCount={cartCount} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
