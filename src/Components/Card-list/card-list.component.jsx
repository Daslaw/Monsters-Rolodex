import Card from "../card/card.component";
import "./Card-List.Styles.css";



const CardList = ({ monsters })=> (

        <div className="Card-List" >
                {monsters.map((monster) => {
                return<Card monster={monster}/>;
                })}
            </div>
        );


export default CardList;
