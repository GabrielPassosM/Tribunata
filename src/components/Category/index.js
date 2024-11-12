import Player from "../Player"
import "./Category.css"

const Category = ({ players, primaryColor, secondColor, name }) => {
    debugger
    return (
        players.length > 0 && <section className="category" style={{ backgroundColor: secondColor }}>
            <h3 style={{borderColor: primaryColor}} >{name}</h3>
            <div className="players">
                {players.map(p => <Player key={p.name} headerColor={primaryColor} name={p.name} image={p.image} quantity={p.quantity}/>)}
            </div>
        </section>
    )
}

export default Category