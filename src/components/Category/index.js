import Player from "../Player"
import "./Category.css"

const Category = (props) => {
    return (
        <section className="category" style={{ backgroundColor: props.secondColor }}>
            <h3 style={{borderColor: props.primaryColor}} >{props.name}</h3>
            {props.players.map(player => <Player/>)}
        </section>
    )
}

export default Category