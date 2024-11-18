import "./Player.css"
import { FaTrash } from "react-icons/fa";

const Player = ({ playerInfo, metricInfo, headerColor, onDelete }) => {

    const positionLabel = {
        "goalkeeper": "Goleiro",
        "defender": "Zagueiro",
        "midfielder": "Meio-campo",
        "forward": "Atacante"
    }[playerInfo.position]

    return (
        <div className="player">
            <FaTrash size={25} className="delete" onClick={() => onDelete(playerInfo.id)} />
            <div className="playerHeader" style={{ backgroundColor: headerColor }}>
                <img src={playerInfo.image_url} alt="foto do jogador" />
            </div>

            <div className="playerFooter">
                <h4>{playerInfo.name}</h4>
                <h4>{positionLabel}</h4>
                <h5>{metricInfo[0]} {metricInfo[1]}</h5>
            </div>
        </div>
    )
}

export default Player;