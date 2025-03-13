import Card from "../card/Card";
import style from "./Favorites.module.css";
import { useLocation } from 'react-router-dom';


const Favorites = ({ characters, onClose, addFavs, showFavButton }) => {


    return (
        <>
            <div className={style.conteiner}>
                {characters.map((char) => {
                    return (
                        <Card
                            key={char.id}
                            name={char.name}
                            status={char.status}
                            species={char.species}
                            gender={char.gender}
                            image={char.image}
                            onClose={onClose}
                            addFavs={addFavs}
                            id={char.id}
                            showFavButton={false} // Pasa esta prop a false para no mostrar los botones en Favoritos
                        />
                    )
                })}
            </div>
        </>
    );

};

export default Favorites;