import Player from "../Player"
import "./Category.css"

const Category = (props) => {
    debugger
    return (
        props.players.length > 0 && <section className="category" style={{ backgroundColor: props.secondColor }}>
            <h3 style={{borderColor: props.primaryColor}} >{props.name}</h3>
            <div className="players">
                {props.players.map(p => <Player key={p.name} headerColor={props.primaryColor} name={p.name} image={p.image} quantity={p.quantity}/>)}
            </div>
        </section>
    )
}

export default Category