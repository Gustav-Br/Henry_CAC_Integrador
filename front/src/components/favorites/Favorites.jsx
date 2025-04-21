import Card from "../card/Card";
import style from "./Favorites.module.css";


const Favorites = ({ favorites, onDelFavs }) => {

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
                            onDelFavs={onDelFavs}
                            id={char.id}
                            favorites={favorites}
                        />
                    )
                })}
            </div>
        </>
    );

};

export default Favorites;