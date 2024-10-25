import { useState, useEffect } from "react"; // Importamos useState y useEffect desde React para manejar el estado y efectos secundarios
import "./App.css"; // Importamos el archivo CSS para estilizar el componente

function App() {
  // Estado inicial para almacenar los datos del formulario
  const [formData, setFormData] = useState({
    name: "", // Guardará el nombre del usuario
    country: "", // Guardará el país
    email: "", // Guardará el correo electrónico
    preferences: "", // Guardará los gustos o preferencias del usuario
  });

  // Estado que manejará la lista de todos los datos registrados
  const [dataList, setDataList] = useState([]); // Inicia como un arreglo vacío que se llenará conforme se añadan datos

  // Mensaje de error que se mostrará si el correo ya existe
  const [errorMessage, setErrorMessage] = useState("");

  // Estado que controla si los datos almacenados se muestran o no
  const [showData, setShowData] = useState(false);

  // useEffect se usa aquí para cargar los datos del localStorage cuando la aplicación se inicia
  useEffect(() => {
    const storedData = localStorage.getItem("dataList"); // Obtenemos los datos almacenados
    if (storedData) {
      setDataList(JSON.parse(storedData)); // Si existen datos, los parseamos de JSON y los añadimos a dataList
    }
  }, []);

  // useEffect que actualiza el localStorage cada vez que dataList cambia
  useEffect(() => {
    localStorage.setItem("dataList", JSON.stringify(dataList)); // Convertimos dataList a una cadena JSON y la guardamos
  }, [dataList]);

  // Función que maneja los cambios en los campos del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Obtenemos el nombre y el valor del input que fue modificado
    setFormData({ ...formData, [name]: value }); // Actualizamos el estado formData con el valor nuevo
    setErrorMessage(""); // Limpiamos cualquier mensaje de error cuando se cambia un campo
  };

  // Función que verifica si el correo ya existe en la lista de datos registrados
  const emailExists = (email) => {
    return dataList.some((item) => item.email === email); // Devuelve true si el correo ya existe en dataList
  };

  // Función que maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evitamos que el formulario recargue la página

    // Validación: si el correo ya está registrado, mostramos un mensaje de error
    if (emailExists(formData.email)) {
      setErrorMessage("Este correo ya está registrado.");
    } else {
      // Si el correo no está registrado, añadimos el nuevo dato a dataList
      setDataList([...dataList, formData]); // Agregamos el nuevo dato al arreglo existente
      setFormData({ name: "", country: "", email: "", preferences: "" }); // Limpiamos el formulario después de enviarlo
    }
  };

  // Función para alternar la visibilidad de los datos
  const toggleShowData = () => {
    setShowData(!showData); // Cambiamos el valor de showData (true/false) para mostrar u ocultar los datos
  };

  return (
    <div className="App">
      <h2>Formulario de Registro</h2>
      <form onSubmit={handleSubmit} className="form">
        {/* Input para el nombre */}
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input para el país */}
        <div>
          <label htmlFor="country">País:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input para el correo electrónico */}
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Input para las preferencias o gustos */}
        <div>
          <label htmlFor="preferences">¿Qué te gusta?:</label>
          <input
            type="text"
            id="preferences"
            name="preferences"
            value={formData.preferences}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Botón para enviar el formulario */}
        <button type="submit">Guardar</button>
      </form>

      {/* Si hay un mensaje de error, lo mostramos */}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      {/* Botón para alternar la visibilidad de los datos */}
      <button onClick={toggleShowData}>
        {showData ? "Ocultar Datos" : "Ver Todos los Datos"}
      </button>

      {/* Si showData es true, mostramos la lista de datos */}
      {showData && (
        <div className="data-list">
          <h3>Datos Registrados:</h3>
          <ul>
            {dataList.map((data, index) => (
              <li key={index}>
                <strong>Nombre:</strong> {data.name} <br />
                <strong>País:</strong> {data.country} <br />
                <strong>Correo:</strong> {data.email} <br />
                <strong>Gustos:</strong> {data.preferences}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
