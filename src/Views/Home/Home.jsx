import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";

const arrayProjects = [
  {
    id: 1,
    name: "Juego de Preguntas",
    description:
      "Este emocionante proyecto tiene como objetivo desafiar los límites de la velocidad mental al responder cinco preguntas en tan solo 30 segundos. Los participantes se sumergirán en una experiencia dinámica donde la agilidad cognitiva y el conocimiento se combinan para ofrecer respuestas precisas y rápidas. ",
  },
  { id: 2, name: "Calculadora Web", description: "" },
  { id: 3, name: "Catálogo de películas", description: "" },
  { id: 4, name: "Reporte escolar", description: "" },
  { id: 5, name: "Planilla de ventas", description: "" },
  { id: 6, name: "Registro de empleados", description: "" },
  { id: 7, name: "Registro del automotor", description: "" },
  { id: 8, name: "Veterinaria", description: "" },
  { id: 9, name: "Resumen de cuenta bancaria", description: "" },
  { id: 10, name: "Buscador de peliculas y series.", description: "" },
  { id: 11, name: "Sitio de cotizaciones.", description: "" },
  { id: 12, name: "Juego de números.", description: "" },
  { id: 13, name: "Sitio de telefonía móvil", description: "" },
  { id: 14, name: "Gestión de universidad.", description: "" },
];

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Proyectos de este curso</h1>
      <div className={styles.cardsContainer}>
        {arrayProjects.map((project) => {
          return (
            <Card
              key={project.id}
              name={project.name}
              id={project.id}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
