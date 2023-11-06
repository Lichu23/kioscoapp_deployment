import { useCallback, useEffect } from "react";
import Layout from "@/layout/Layout";
import useKiosco from "@/hooks/useKiosco";
import { formatearDinero } from "../helpers";
export default function Total() {
  const { pedido, nombre, setNombre, colocarOrden, total } = useKiosco();

  const comprobarPedido = useCallback(() => {
    return pedido.length === 0 || nombre.length < 3;
  }, [pedido, nombre]);

  useEffect(() => {
    comprobarPedido();
  }, [pedido, comprobarPedido]);

  return (
    <Layout pagina="Total">
      <h1 className="text-4xl font-black">Total a Pagar</h1>
      <p className="text-2xl my-10">Confirma tu Pedido a Continuacion</p>

      <form onSubmit={colocarOrden}>
        <div>
          <label
            htmlFor="nombre"
            className="block uppercase text-slate-800 font bold text-xl"
          >
            Nombre
          </label>

          <input
            placeholder="Escribe tu nombre"
            id="nombre"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="mt-10">
          <p className="text-2xl">
            Total a pagar: {""}
            <span>{formatearDinero(total)}</span>
          </p>
        </div>

        <div>
          <input
            type="submit"
            className={`${
              comprobarPedido()
                ? "bg-amber-100"
                : "bg-amber-500 hover:bg-amber-600"
            }   w-full lg:w-1/3 px-5 py-2 mt-2 rounded uppercase font-bold text-white`}
            value="Confirmar Pedido"
            disabled={comprobarPedido()}
          />
        </div>
      </form>
    </Layout>
  );
}
