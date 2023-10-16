import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ name, description, id }) => {
  return (
    <div className={styles.contenedorCard}>
      <h1>{name}</h1>
      <h2>Día: {id}</h2>
      <p className={styles.bioCard}>{description}</p>
      <Link to={`project/${id}`} className={styles.btnCardInfo}>
        <button>Ver Proyecto</button>
      </Link>
    </div>
  );
};

export default Card;
