import Player from "../Player"
import "./Category.css"

const Category = (props) => {
    return (
        <section className="category" style={{ backgroundColor: props.secondColor }}>
            <h3 style={{borderColor: props.primaryColor}} >{props.name}</h3>
            <div className="players">
                {props.players.map(p => <Player name={p.name} image={p.image} quantity={p.quantity}/>)}
            </div>
        </section>
    )
}

export default Category