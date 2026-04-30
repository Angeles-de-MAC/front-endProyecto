"use client" // Jamás en la vida hagan esto en un layout.tsx o page.tsx

import Image from "next/image";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import { TarjetasSemestre } from "./components/TarjetasSemestre/TarjetasSemestre";
import { TarjetasMaterias } from "./components/TarjetasMateria/TarjetasMaterias";
import RecursosRecientes from "./recursos-recientes/RecursosRecientes";
import ComparteTuConocimiento from "./comparte-tu-conocimiento/ComparteTuConocimiento";

export default function Home() {
  return (
    <>
      <Header />
      <TarjetasSemestre />

      <RecursosRecientes/>

      <ComparteTuConocimiento/>

      <TarjetasMaterias />
      <Footer />
    </>
  );
}