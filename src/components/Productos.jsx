import React, { useEffect, useState } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Error al obtener los productos");
        const data = await response.json();
        setProductos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <h2>Cargando productos...</h2>;
  if (error) return <h2>{error}</h2>;

  return (
    <div className="container mt-4">
      <h2>Productos de FakeStore</h2>
      <div className="row">
        {productos.map((producto) => (
          <div key={producto.id} className="col-md-4">
            <div className="card mb-3">
              <img src={producto.image} alt={producto.title} className="card-img-top" style={{ height: "250px", objectFit: "contain" }} />
              <div className="card-body">
                <h5 className="card-title">{producto.title}</h5>
                <p className="card-text">{producto.description.substring(0, 100)}...</p>
                <p className="card-text"><strong>Precio: ${producto.price}</strong></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productos;
