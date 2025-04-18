import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";


const Card = ({ id, image, name, species, gender, favorites, onClose, addFavs, onDelFavs }) => {

	const IsFav = favorites.some((fav) => fav.id === id);

	return (
		<div className={style.conteiner}>
			<div className={style.wrapImgBtn}>
				<img className={style.imagen} src={image} alt="Imagen" />
				{!IsFav && (<button className={style.buttonClose} onClick={() => onClose(id)}>X</button>)}
				{!IsFav && (<button className={style.buttonFav} onClick={() => addFavs(id)}>
					<FaRegHeart />
				</button>)}
				{IsFav && (<button className={style.buttonFav} onClick={() => onDelFavs(id)}>
					<FaHeart />
				</button>)}
				<Link to={`/detail/${id}`}>
					<h3 className={style.id}>{id}</h3>
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

