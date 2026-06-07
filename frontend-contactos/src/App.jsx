import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [resultado, setResultado] = useState("");

  const guardar = async () => {
    try {
      const response = await fetch(
        "https://w6nv4al403.execute-api.us-east-1.amazonaws.com/contacto",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nombre,
            correo,
            mensaje
          })
        }
      );

      const data = await response.json();
      setResultado(data.mensaje);
    } catch (error) {
      console.error(error);
      setResultado("Error al enviar información");
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "50px auto" }}>
      <h1>Registro de Contactos Cloud</h1>

      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <input
        type="email"
        placeholder="Correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <textarea
        placeholder="Mensaje"
        value={mensaje}
        onChange={(e) => setMensaje(e.target.value)}
        style={{ width: "100%", marginBottom: "10px" }}
      />

      <button onClick={guardar}>
        Guardar Contacto
      </button>

      <p>{resultado}</p>
    </div>
  );
}

export default App;