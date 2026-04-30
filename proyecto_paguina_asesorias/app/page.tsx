import Image from "next/image";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import { TarjetasSemestre } from "./components/TarjetasSemestre/TarjetasSemestre";
import { TarjetasMaterias } from "./components/TarjetasMateria/TarjetasMaterias";

export default function Home() {
  return (
    <>
      <Header />
      <TarjetasSemestre />
      <TarjetasMaterias />
      <Footer />
    </>
  );
}