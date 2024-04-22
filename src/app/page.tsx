import Image from "next/image";
import Products from "./products/products";
import Carousel from "./components/carousel/carousel";

export default function Home() {
  return <>
    <Carousel />
    <Products />
  </>;
}
