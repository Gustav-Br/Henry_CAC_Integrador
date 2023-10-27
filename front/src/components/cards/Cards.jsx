import Card from "../card/Card";
import style from "./Cards.module.css";


const Cards = ({characters, onClose}) => {
    
  
  return (
    <>
      <div className={style.conteiner}>
        {characters.map((char) => {
          return(
            <Card 
              key={char.id}
              name={char.name}
              status={char.status}
              species={char.species}
              gender={char.gender}
              image={char.image}
              onClose={ onClose }
              id={char.id}
            />
          )
        })}
      </div>
    </>
  );
  
};

export default Cards;
