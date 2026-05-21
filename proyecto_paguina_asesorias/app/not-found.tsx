import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#001f4d] to-[#002a6d] text-[#f8d67d] px-6 text-center">
      <div className="bg-[#ffffff]/5 p-12 rounded-3xl backdrop-blur-sm border border-[#ffffff]/10 shadow-2xl">
        <h1 className="text-9xl font-bold mb-4 tracking-tighter text-[#d4b15a]">
          404
        </h1>
        <h2 className="text-3xl font-semibold mb-6 text-white">
          Página no encontrada
        </h2>
        <p className="text-lg text-[#e9d7a8] mb-8 max-w-md mx-auto">
          Lo sentimos, no pudimos encontrar el recurso o la página que estás
          buscando. Es posible que el enlace sea incorrecto o que haya sido
          movido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-3 bg-[#d4b15a] text-[#001f4d] font-bold rounded-full hover:bg-white hover:text-[#001f4d] hover:-translate-y-1 transition-all duration-300 shadow-lg"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
