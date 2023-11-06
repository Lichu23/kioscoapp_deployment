import Image from "next/image";
import useKiosco from "@/hooks/useKiosco";

const Categoria = ({ categoria }) => {
  //
  const { categoriaActual, handleClickCategoria } = useKiosco();
  const { nombre, icono, id } = categoria;

  return (
    <button
      className={`${
        categoriaActual?.id === id ? "bg-amber-400" : ""
      } flex items-center gap-4 w-full border p-5 hover:bg-amber-100`}
      onClick={() => handleClickCategoria(id)}
    >
      <Image
        width={50}
        height={50}
        src={`/assets/img/icono_${icono}.svg`}
        alt="Imagen Icono"
        priority
      />

      <span className="text-2xl font-bold cursor-pointer">{nombre}</span>
    </button>
  );
};

export default Categoria;
