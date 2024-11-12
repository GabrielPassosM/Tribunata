import "./Player.css"
import { FaTrash } from "react-icons/fa";

const Player = ({ name, image, quantity, headerColor, onDelete }) => {
    return (
        <div className="player">
            <FaTrash size={25} className="delete" onClick={onDelete} />
            <div className="playerHeader" style={{ backgroundColor: headerColor }}>
                <img src={image} alt="foto do jogador" />
            </div>

            <div className="playerFooter">
                <h4>{name}</h4>
                <h5>{quantity}</h5>
            </div>
        </div>
    )
}

export default Player;