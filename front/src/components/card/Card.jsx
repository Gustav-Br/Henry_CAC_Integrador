import style from "./Card.module.css";
import { Link } from "react-router-dom";


const Card = ({ id, image, name, species, gender, onClose, addFavs, onDelFavs, showFavButton = true }) => {

  return (
    <div className={style.conteiner}>
      <div className={style.wrapImgBtn}>
        <img className={style.imagen} src={image} alt="Imagen" />
        {showFavButton && (<button className={style.button} onClick={() => onClose(id)}>X</button>)}
        {showFavButton && (<button className={style.buttonFav} onClick={() => addFavs(id)}>Fav</button>)}
        {!showFavButton && (<button className={style.button} onClick={() => onDelFavs(id)}>X</button>)}
        <Link to={`/detail/${id}`}>
          <h3 className={style.name}>{name}</h3>
        </Link>
      </div>
      <div className={style.property}>
        <h3>{species}</h3>
        <h3>{gender}</h3>
      </div>
    </div>
  );
};

export default Card;

