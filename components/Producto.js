import Image from "next/image";
import { formatearDinero } from "@/helpers";
import useKiosco from "@/hooks/useKiosco";

const Producto = ({ producto }) => {
  const { handleSetProducto, handleChangeModal } = useKiosco();

  const { imagen, nombre, precio } = producto;

  return (
    <div className="border p-3 flex flex-col justify-between">
      <div>
        <Image
          src={`/assets/img/${imagen}.jpg`}
          alt={`Imagen del Plato ${nombre}`}
          width={400}
          height={500}
        />
        <div className="p-5">
          <h3
            title={nombre}
            className="text-2xl font-bold overflow-hidden text-ellipsis line-clamp-2 min-h-[3em]"
          >
            {nombre}
          </h3>
          <p className="mt-5 font-black text-4xl text-amber-500">
            {formatearDinero(precio)}
          </p>
        </div>
      </div>

      <button
        type="button"
        className="bg-black hover:bg-gray-600 text-white w-full mt-5 p-3 uppercase font-bold"
        onClick={() => {
          handleChangeModal();
          handleSetProducto(producto);
        }}
      >
        Comprar
      </button>
    </div>
  );
};

export default Producto;
