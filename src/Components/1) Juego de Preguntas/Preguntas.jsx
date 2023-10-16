import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Juego = () => {
  const [tiempoRestante, setTiempoRestante] = useState(30);
  const [respuestas, setRespuestas] = useState({
    pregunta1: "",
    pregunta2: "",
    pregunta3: "",
    pregunta4: "",
    pregunta5: "",
  });

  let intervaloTiempo;

  useEffect(() => {
    const tiempoFinalizado = setTimeout(() => {
      handleTimeUp();
    }, 1000 * tiempoRestante);

    intervaloTiempo = setInterval(() => {
      setTiempoRestante((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervaloTiempo);
      clearTimeout(tiempoFinalizado);
    };
  }, [tiempoRestante]);

  const handleTimeUp = () => {
    // Evitar actualización cuando el tiempo ha llegado a cero
    if (tiempoRestante > 0) {
      clearInterval(intervaloTiempo);

      const fecha = new Date();
      const mensaje =
        `Fecha: ${fecha.toLocaleDateString("es-ES")}\n\n` +
        `Pregunta 1): ${respuestas.pregunta1}\n` +
        `Pregunta 2): ${respuestas.pregunta2}\n` +
        `Pregunta 3): ${respuestas.pregunta3}\n` +
        `Pregunta 4): ${respuestas.pregunta4}\n` +
        `Pregunta 5): ${respuestas.pregunta5}`;

      Swal.fire({
        icon: "success",
        title: "¡Juego Terminado!",
        text: mensaje,
      });
    }
  };

  const handleFinish = () => {
    clearInterval(intervaloTiempo);

    const fecha = new Date();
    const mensaje =
      `Fecha: ${fecha.toLocaleDateString("es-ES")}\n\n` +
      `Pregunta 1): ${respuestas.pregunta1}\n` +
      `Pregunta 2): ${respuestas.pregunta2}\n` +
      `Pregunta 3): ${respuestas.pregunta3}\n` +
      `Pregunta 4): ${respuestas.pregunta4}\n` +
      `Pregunta 5): ${respuestas.pregunta5}`;

    Swal.fire({
      icon: "success",
      title: "¡Juego Terminado!",
      text: mensaje,
    });
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className={styles.fondo}>
      <Link to={"/"} className={styles.botones}>
        <button>Volver</button>
      </Link>

      <h1 className={styles.h1Preguntas}>
        Responde a las preguntas lo más rápido que puedas
      </h1>
      <h2 className={styles.h2Preguntas}>Tiempo restante: {tiempoRestante}</h2>

      <div className={styles.container}>
        <div className={styles.preguntas}>
          <p>Cual es tu edad?</p>
          <input
            type="text"
            value={respuestas.pregunta1}
            onChange={(e) =>
              setRespuestas({ ...respuestas, pregunta1: e.target.value })
            }
          />

          <p>Quien te gusta?</p>
          <input
            type="text"
            value={respuestas.pregunta2}
            onChange={(e) =>
              setRespuestas({ ...respuestas, pregunta2: e.target.value })
            }
          />

          <p>Que día es hoy?</p>
          <input
            type="text"
            value={respuestas.pregunta3}
            onChange={(e) =>
              setRespuestas({ ...respuestas, pregunta3: e.target.value })
            }
          />

          <p>Tengo frío?</p>
          <input
            type="text"
            value={respuestas.pregunta4}
            onChange={(e) =>
              setRespuestas({ ...respuestas, pregunta4: e.target.value })
            }
          />

          <p>Estoy conectado a egg?</p>
          <input
            type="text"
            value={respuestas.pregunta5}
            onChange={(e) =>
              setRespuestas({ ...respuestas, pregunta5: e.target.value })
            }
          />
        </div>
        <br />
        <br />
        <div className={styles.botones}>
          <button onClick={handleFinish}>Terminar intento</button> <br />
          <br />
          <button onClick={handleRestart}>Reiniciar</button>
        </div>
      </div>
    </div>
  );
};

export default Juego;
