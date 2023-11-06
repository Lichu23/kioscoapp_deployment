import { useState, useEffect } from "react";
import Image from "next/image";
import useKiosco from "@/hooks/useKiosco";
import { formatearDinero } from "../helpers";

const ModalProducto = () => {
  const { producto, handleChangeModal, handleAgregarPedido, pedido } =
    useKiosco();
  // const [cantidad, setCantidad] = useState(1);
  const [edicion, setEdicion] = useState(false);

  const handleInitialState = () => {
    const productoState = pedido?.find((prod) => prod.id === producto.id);
    if (productoState) {
      setEdicion(true);
      return productoState.cantidad;
    }
    return 1;
  };
  const [cantidad, setCantidad] = useState(handleInitialState);

  return (
    <div className="md:flex gap-10">
      <div className="md:w-1/3">
        <Image
          width={300}
          height={400}
          alt={`imagen producto ${producto.nombre}`}
          src={`/assets/img/${producto.imagen}.jpg`}
        />
      </div>

      <div className="md:2/3">
        <div className="flex justify-end">
          <button onClick={handleChangeModal}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>
        <h1 className="text-3xl font-bold mt-5">{producto.nombre}</h1>
        <p className="mt-5 font-black text-5xl text-amber-500">
          {formatearDinero(producto.precio)}
        </p>

        <div className="flex gap-4 mt-5">
          <button
            type="button"
            onClick={() => {
              if (cantidad <= 1) return;
              setCantidad(cantidad - 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>

          <p className="text-3xl">{cantidad}</p>

          <button
            type="button"
            onClick={() => {
              if (cantidad >= 20) return;
              setCantidad(cantidad + 1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </button>
        </div>

        <button
          type="button"
          className="bg-black hover:bg-gray-600 text-white font-bold uppercase px-5 py-2 mt-3 rounded"
          onClick={() => handleAgregarPedido({ ...producto, cantidad })}
        >
          {edicion ? "Guardar Cambios" : "Añadir al Pedido"}
        </button>
      </div>
    </div>
  );
};

export default ModalProducto;
