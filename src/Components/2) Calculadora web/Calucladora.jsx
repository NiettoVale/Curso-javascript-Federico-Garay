import { useState } from "react";
import styles from "./Calculadora.module.css";

const Calculadora = () => {
  // Estados para la calculadora:
  const [numbers, setNumbers] = useState({
    n1: "",
    n2: "",
  });
  const [resultado, setResultado] = useState("");

  // Función para controlar los cambios de los inputs:
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNumbers((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Función para mostrar el resultado:
  const mostrarResultado = (resultado) => {
    setResultado(resultado);
  };

  // Funciones para cada operación:
  const suma = () => {
    const result = parseInt(numbers.n1) + parseInt(numbers.n2);
    if (!isNaN(result)) {
      mostrarResultado(result);
    } else {
      mostrarResultado("Error");
    }
  };

  const resta = () => {
    const result = parseInt(numbers.n1) - parseInt(numbers.n2);
    if (!isNaN(result)) {
      mostrarResultado(result);
    } else {
      mostrarResultado("Error");
    }
  };

  const multiplicacion = () => {
    const result = parseInt(numbers.n1) * parseInt(numbers.n2);
    if (!isNaN(result)) {
      mostrarResultado(result);
    } else {
      mostrarResultado("Error");
    }
  };

  const division = () => {
    const result = parseInt(numbers.n1) / parseInt(numbers.n2);
    if (!isNaN(result)) {
      mostrarResultado(result);
    } else {
      mostrarResultado("Error");
    }
  };

  const potencia = () => {
    const result = parseInt(numbers.n1) ** parseInt(numbers.n2);
    if (!isNaN(result)) {
      mostrarResultado(result);
    } else {
      mostrarResultado("Error");
    }
  };

  const raiz = () => {
    const result = Math.sqrt(parseInt(numbers.n2));
    if (!isNaN(result)) {
      mostrarResultado(result);
    } else {
      mostrarResultado("Error");
    }
  };

  const valorAbsoluto = () => {
    const result = Math.abs(parseInt(numbers.n2));
    if (!isNaN(result)) {
      mostrarResultado(result);
    } else {
      mostrarResultado("Error");
    }
  };

  const random = () => {
    const result = Math.floor(
      Math.random() * (parseInt(numbers.n1) - parseInt(numbers.n2)) +
        parseInt(numbers.n2)
    );
    if (!isNaN(result)) {
      mostrarResultado(result);
    } else {
      mostrarResultado("Error");
    }
  };

  const floor = () => {
    const result = Math.floor(parseInt(resultado));
    if (!isNaN(result)) {
      setResultado(result);
    } else {
      setResultado("Error");
    }
  };

  const round = () => {
    const result = Math.round(parseInt(resultado));
    if (!isNaN(result)) {
      setResultado(result);
    } else {
      setResultado("Error");
    }
  };

  const ceil = () => {
    const result = Math.ceil(parseInt(resultado));
    if (!isNaN(result)) {
      setResultado(result);
    } else {
      setResultado("Error");
    }
  };

  return (
    <div className={styles.fondoCalculadora}>
      <div className={styles.container}>
        <input
          className={styles.inputs}
          type="text"
          name="n1"
          placeholder="Primer Número"
          value={numbers.n1}
          onChange={handleChange}
        />
        <input
          className={styles.inputs}
          type="text"
          placeholder="Segundo Número"
          name="n2"
          value={numbers.n2}
          onChange={handleChange}
        />
        <button className={styles.buttonCal} onClick={suma}>
          Suma
        </button>
        <button className={styles.buttonCal} onClick={resta}>
          Resta
        </button>
        <button className={styles.buttonCal} onClick={multiplicacion}>
          Multiplicación
        </button>
        <button className={styles.buttonCal} onClick={division}>
          División
        </button>

        {/* Operaciones avanzadas */}
        <button className={styles.buttonCal} onClick={potencia}>
          Potencia
        </button>
        <button className={styles.buttonCal} onClick={raiz}>
          Raíz
        </button>
        <button className={styles.buttonCal} onClick={valorAbsoluto}>
          Absoluto
        </button>
        <button className={styles.buttonCal} onClick={random}>
          Random
        </button>

        {/* Resultado y redondeos */}
        <h3>
          Resultado: <span id="resultado">{resultado}</span>
        </h3>
        <button className={styles.buttonCal} onClick={floor}>
          Floor
        </button>
        <button className={styles.buttonCal} onClick={round}>
          Round
        </button>
        <button className={styles.buttonCal} onClick={ceil}>
          Ceil
        </button>
      </div>
    </div>
  );
};

export default Calculadora;
