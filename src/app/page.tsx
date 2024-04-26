import Image from "next/image";
import Products from "./components/products/products";
import Banner from "./components/banner/banner";
import RecommendedProducts from "./components/recommended-products/recommended-products";

export default function Home() {
  return <>
    <Banner />
    <h1 className="text-center font-bold-400 text-3xl my-12 ">Estos son algunos de los productos mas vendidos</h1>
    <Products cantidadProductos={20} />
    <RecommendedProducts/>
  </>;
}
