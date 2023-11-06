export default function Orden({ orden }) {
  const { id, nombre, total, pedido } = orden;

  return (
    <div className="border p-10 space-y-5">
      <h3 className="text-2xl font-black">Orden: {id}</h3>
      <p className="text-lg my-10">Cliente: {nombre}</p>

      <div>
        {Array.isArray(pedido) &&
          pedido.map((platillo) => (
            <div
              key={platillo.id}
              className="py-3 flex border-bottom las-of-tpr:border-0 items-center"
            >
              <div className="w-32">
                <Image />
              </div>
              <div className="p-5 space-y-2">
                <h4 className="text-xl font-bold text-amber-500">
                  {platillo.nombre}
                </h4>
                <p className="text-lg font-bold">
                  Cantidad: {platillo.cantidad}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
