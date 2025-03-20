import Card from "../card/Card";
import style from "./Favorites.module.css";


const Favorites = ({ favorites, onClose, addFavs, showFavButton }) => {

    console.log(favorites);

    return (
        <>
            <div className={style.conteiner}>
                {favorites.map((char) => {
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