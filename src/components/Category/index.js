import Player from "../Player"
import "./Category.css"

const Category = ({ players, primaryColor, secondColor, name, onDelete }) => {
    debugger
    return (
        players.length > 0 && <section className="category" style={{ backgroundColor: secondColor }}>
            <h3 style={{borderColor: primaryColor}} >{name}</h3>
            <div className="players">
                {players.map(p => {
                    return <Player key={p.name} headerColor={primaryColor} name={p.name} image={p.image} quantity={p.quantity} onDelete={onDelete}/>
                })}
            </div>
        </section>
    )
}

export default Category