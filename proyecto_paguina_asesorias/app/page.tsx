
import { TarjetasSemestre } from "./components/TarjetasSemestre/TarjetasSemestre";
import { TarjetasMaterias } from "./components/TarjetasMateria/TarjetasMaterias";
import RecursosRecientes from "./recursos-recientes/recursos-recientes";
import ComparteTuConocimiento from "./comparte-tu-conocimiento/comparte-tu-conocimiento";

export default function Home() {
  return (
    <>
      <TarjetasSemestre />

      <RecursosRecientes />

      <ComparteTuConocimiento />

      <TarjetasMaterias />
    </>
  );
}
